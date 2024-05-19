import React, { useState, useEffect } from 'react';
import bggameresto from './img-restaurant/bggameresto.png';
import lagugame from './img-restaurant/lagugame.mp3';

const foods = ['🍎', '🍌', '🍓', '🥑', '🧅', '🍗', '🍧', '🍦', '🌶️', '🍪'];

const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const Gameresto = () => {
    const [cards, setCards] = useState([]);
    const [selectedCardIndexes, setSelectedCardIndexes] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [moves, setMoves] = useState(0);

    const goBack = () => {
        window.history.back();
    };

    useEffect(() => {
        const initialCards = shuffleArray([...foods, ...foods]).map((food, index) => ({
            id: index,
            food: food,
            isFlipped: false,
            isMatched: false,
        }));
        setCards(initialCards);
    }, []);

    const handleCardClick = (index) => {
        if (!cards[index].isMatched) {
            const updatedCards = [...cards];
            if (!updatedCards[index].isFlipped) {
                updatedCards[index].isFlipped = true;
                setSelectedCardIndexes((prevIndexes) => [...prevIndexes, index]);
            } else {
                updatedCards[index].isFlipped = false;
                setSelectedCardIndexes((prevIndexes) => prevIndexes.filter((prevIndex) => prevIndex !== index));
            }
            setCards(updatedCards);
            setMoves((prevMoves) => prevMoves + 1);
        }
    };

    useEffect(() => {
        if (selectedCardIndexes.length === 2) {
            const [firstIndex, secondIndex] = selectedCardIndexes;
            if (cards[firstIndex].food === cards[secondIndex].food) {
                setMatchedPairs([...matchedPairs, cards[firstIndex].food]);
                const updatedCards = [...cards];
                updatedCards[firstIndex].isMatched = true;
                updatedCards[secondIndex].isMatched = true;
                setCards(updatedCards);
            } else {
                setTimeout(() => {
                    const updatedCards = [...cards];
                    updatedCards[firstIndex].isFlipped = false;
                    updatedCards[secondIndex].isFlipped = false;
                    setCards(updatedCards);
                }, 1000);
            }
            setSelectedCardIndexes([]);
        }
    }, [selectedCardIndexes]);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100" style={{ backgroundImage: `url(${bggameresto})` }}>
            <button onClick={goBack} className="p-2.5 mb-10 text-lg bg-orange-300 text-white rounded hover:bg-orange-200 shadow">
                Kembali
            </button>
            <audio id="laguGame" src={lagugame} loop autoPlay />
            <h1 className="text-5xl font-bold italic mb-8 text-black text-center">Food Memory Game </h1>
            <p className="text-xl font-bold mb-5 text-black">yuk kita main bersama ! </p>
            <div className="grid grid-cols-4 gap-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`w-16 h-16 bg-white rounded-lg flex items-center justify-center cursor-pointer ${card.isFlipped || card.isMatched ? 'opacity-100' : 'opacity-100'
                            }`}
                        onClick={() => handleCardClick(card.id)}
                    >
                        {card.isFlipped || card.isMatched ? card.food : ''}
                    </div>
                ))}
            </div>
            <p className="mt-4 text-black font-bold">Moves : {moves}</p>
            {matchedPairs.length === foods.length && <p className="mt-2 text-green-500 font-bold">You Win!</p>}
        </div>
    );
};

export default Gameresto;

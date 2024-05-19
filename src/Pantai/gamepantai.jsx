import React, { useState } from 'react';
import BgGame from './img-pantai/BgGame.png';
import lagugame from './img-pantai/lagumain.mp3';

function Game() {
    const [number] = useState(39); 
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    const goBack = () => {
        window.history.back();
    };

    const handleInputChange = (e) => {
        setGuess(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const guessedNumber = parseInt(guess);
        if (isNaN(guessedNumber)) {
            setMessage('Masukkan angka yang valid.');
            return;
        }

        setAttempts(attempts + 1);

        if (guessedNumber === number) {
            setMessage(`Selamat! Anda menebak angka ini dalam ${attempts + 1} langkah.`);
        } else if (guessedNumber < number) {
            setMessage('Terlalu rendah. Coba lagi');
        } else {
            setMessage('Terlalu tinggi. Coba lagi.');
        }
    };

    return (
        <div className="App text-center " style={{ backgroundImage: `url(${BgGame})`}}>
            <header className="App-header min-h-screen flex flex-col items-center justify-center text-white">
                <button onClick={goBack} className="p-2.5 m-1 text-lg bg-blue-200 text-black rounded hover:bg-blue-300 shadow">
                    Kembali
                </button>
                <audio id="lagugame" src={lagugame} loop autoPlay />
                <div className='container-angka bg-blue-100-transparent'>
                <h1 className="text-5xl mb-5 mt-10 font-serif text-black italic">Ada angka berapa di pantai ? </h1>
                <p className="font-serif text-black">Angka berada di antara 1 sampai 100 !! </p>
                <form onSubmit={handleSubmit} className="mb-8">
                    <input
                        type="text"
                        value={guess}
                        onChange={handleInputChange}
                        placeholder="Masukkan tebakanmu sini"
                        className="p-3 m-2 text-lg border rounded shadow bg-blue"
                    />
                    <button type="submit" className="p-2.5 m-1 text-lg bg-blue-400 text-black rounded hover:bg-blue-600 shadow">
                        Tebak
                    </button>
                </form>
                <p>{message}</p>
                </div>
            </header>
        </div>
    );
}

export default Game;

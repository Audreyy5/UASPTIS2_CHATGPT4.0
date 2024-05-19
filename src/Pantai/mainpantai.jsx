import React, { useState, useEffect } from 'react';
import './mainpantai.css';
import TodoList from '../others/TodoList.jsx';
import ImageSlider from "./ImageSlider.jsx";
import PantaiBerlian from "./img-pantai/PantaiBerlian.jpg";
import PantaiBerlian1 from "./img-pantai/PantaiBerlian_1.jpeg";
import PantaiBerlian2 from "./img-pantai/PantaiBerlian_2.jpg";
import PantaiKelingking from "./img-pantai/PantaiKelingking.jpg";
import PantaiKelingking1 from "./img-pantai/PantaiKelingking_1.jpg";
import PantaiKelingking2 from "./img-pantai/PantaiKelingking_2.jpg";
import PantaiUluwatu from "./img-pantai/PantaiUluwatu.jpg";
import PantaiUluwatu1 from "./img-pantai/PantaiUluwatu_1.jpg";
import PantaiUluwatu2 from "./img-pantai/PantaiUluwatu_2.jpg";
import rumah from './img-pantai/rumah.png';
import game from './img-pantai/logogame.png';
import todolistImage from './img-pantai/todolist.png';
import diving from './img-pantai/diving-logo.png';
import lagupantai from './img-pantai/pantai.mp3';

function MainPantai() {
    const images = [
        PantaiBerlian,
        PantaiKelingking,
        PantaiUluwatu,
        PantaiBerlian2,
        PantaiKelingking1,
        PantaiUluwatu2,
    ];
    const [showTodoList, setShowTodoList] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    const handleTodoToggle = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

    const handleTodoListClick = () => {
        setShowTodoList(!showTodoList);
        setShowBackground(!showBackground);
    };
    return (
        <div className={`container-pantai ${showBackground ? 'background-opacity' : ''}`}>
            <br /><br /><br /><br />
            <audio id="lagupantai" src={lagupantai} loop autoPlay />
            <div className='logo-home-pantai'>
                <a href='homepage'>
                    <img className="logo-pantai" src={rumah} alt="Logo Rumah" />
                </a>
                <a href='gamepantai'>
                    <img className="logo-game-pantai mt-5" src={game} alt="Logo Game" />
                </a>
            </div>
            <div className='todolist-pantai' onClick={handleTodoListClick}>
                <img src={todolistImage} alt="TodoList" className='todolist-pantai-image' />
            </div>
            <div className='logo-diving'>
                <a href='Diving'>
                    <img className="diving-logo mt-5 w-20 ml-12 " src={diving} alt="Logo Game" />
                </a>
            </div>
            <div className='todolist-opacity'>
                {showTodoList && <TodoList todos={todos} onTodoToggle={handleTodoToggle} />}
            </div>
            <h1 className='h1-pantai'>Selamat Berlibur di Pantai Bali!</h1>
            <div className='carousel-pantai'>
                <div style={{ padding: "10px" }}>
                    <ImageSlider images={images} />
                </div>
            </div>
            <div className="">
                <h5 className='text-slate-300'>39</h5>
            </div>
            <div className="gambar-pantai">
                <table>
                    <tr>
                        <td>
                            <div className='tulisan-museum-p'>
                                <h3>Pantai Berlian</h3>
                            </div>
                            <div className='gambar1pantai'>
                                <a href='PantaiBerlian'>
                                    <img src={PantaiBerlian1} alt="Gambar 1 pantai" className='image-pantai' />
                                </a>
                            </div>
                        </td>
                        <td>
                            <div className='tulisan-museum-p'>
                                <h3>Pantai Kelingking</h3>
                            </div>
                            <div className='gambar2pantai'>
                                <a href='PantaiKelingking'>
                                    <img src={PantaiKelingking2} alt="Gambar 2 pantai" className='image-pantai' />
                                </a>
                            </div>
                        </td>
                        <td>
                            <div className='tulisan-museum-p'>
                                <h3>Pantai Uluwatu</h3>
                            </div>
                            <div className='gambar3pantai'>
                                <a href='PantaiUluwatu'>
                                    <img src={PantaiUluwatu1} alt="Gambar 3 pantai" className='image-pantai' />
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default MainPantai;
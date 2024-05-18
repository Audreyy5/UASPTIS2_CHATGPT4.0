import React, { useState, useEffect } from 'react';
import TodoList from '../others/TodoList';
import "./lobby.css";
import makanan from "./img-restaurant/makanan.png";
import pegawai from "./img-restaurant/pegawai.png";
import rumah from "./img-restaurant/rumah.png";
import masukrestoran from "./img-restaurant/masuk-restoran.jpg";
import todolistImage from './img-restaurant/todolist.png';
import game from './img-restaurant/logogame.png';
import LaguResto from './img-restaurant/bgmresto.mp3';

function Restoran() {

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
    <div className={`container-restoran ${showBackground ? 'background-opacity' : ''}`}>
      <audio id="laguResto" src={LaguResto} loop autoPlay />
      <br />
      <div className="logo-chat-restoran">
        <a href="homepage">
          <img className="logo-restoran" src={rumah} alt="Logo Rumah" />
        </a>
        <a href='gameresto'>
          <img className="logo-game-resto mt-5 w-12" src={game} alt="Logo Game" />
        </a>
      </div>
      <h1 className="sambutan-restoran">Selamat Datang di Bondi Restaurant !</h1>
      <h2 className="sambutan-restoran2">Yuk Masuk !</h2>
      <div className="gambar-restoran flex flex-cols-3 md:flex-row gap-4">
        <div className="gambar1 w-[600px]">
          <img src={makanan} alt="Gambar 1 " className="image" />
        </div>
        <div className="gambar2 items-center ml-8 mt-20">
          <a href="listmakan">
            <img src={masukrestoran} alt="Gambar 2" className="image" />
          </a>
        </div>
        <div className="gambar3 w-[600px] mt-4">
          <img src={pegawai} alt="Gambar 3" className="image" />
        </div>
      </div>
      <div className='todolist-resto' onClick={handleTodoListClick}>
        <img src={todolistImage} alt="TodoList" className='todolist-resto-image' />
      </div>
      <div className='todolist-opacity'>
        {showTodoList && <TodoList todos={todos} onTodoToggle={handleTodoToggle} />}
      </div>
      <div className="buttons mt-1 mb-32">
        <a href="listmakan">
          <button className="btn">
            <span></span>
            <p data-start="good luck!" data-text="Eat!!!" data-title="Enter"></p>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Restoran;

import React, { useState, useEffect } from 'react';
import TodoList from './../others/TodoList';
import './main-museum.css';
import tarian from './img-museum/tarian.jpeg';
import pakaian from './img-museum/pakaian.jpeg';
import perayaan from './img-museum/perayaan.jpeg';
import rumah from './img-museum/rumah.png';
import todolistImage from './img-museum/todolist.png';

function MuseumOfBali() {
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
    <div className={`container-museum ${showBackground ? 'background-opacity' : ''}`}>
      <br /><br /><br /><br /><br />
      <div className='todolist-main-museum' onClick={handleTodoListClick}>
        <img src={todolistImage} alt="TodoList" className='todolist-mainmuseum-image' />
      </div>
      <div className='todolist-opacity'>
        {showTodoList && <TodoList todos={todos} onTodoToggle={handleTodoToggle} />}
      </div>
      <div className="logo-chat-museum">
        <a href='homepage'>
          <img className="logo-museum" src={rumah} alt="Logo Rumah" />
        </a>
      </div>
      <h1 className='h1-museum'>Selamat datang di Museum of Bali!</h1>
      <div className="gambar-museum grid grid-cols-3 gap-16 mx-12 mt-14">
        <div className='pembungkus1'>
          <div className='gambar1-resto'>
            <a href='tarianlagu'>
              <img src={tarian} alt="Gambar 1" className='image' />
            </a>
          </div>
          <div className='tulisan-museum-p'>
            <p>Tarian dan Lagu Daerah</p>
          </div>
        </div>
        <div className='pembungkus2'>
          <div className='gambar2'>
            <a href='rumahpakaian'>
              <img src={pakaian} alt="Gambar 2" className='image' />
            </a>
          </div>
          <div className='tulisan-museum-p'>
            <p>Rumah dan Pakaian Adat</p>
          </div>
        </div>
        <div className='pembungkus3'>
          <div className='gambar3-resto'>
            <a href='perayaanfakta'>
              <img src={perayaan} alt="Gambar 3" className='image' />
            </a>
          </div>
          <div className='tulisan-museum-p'>
            <p>Perayaan Adat dan Fakta Unik</p>
          </div>
        </div>
      </div>
      <div className="chat-museum w-60 mt-10 ml-16">
        <p>Perhatikan materinya baik-baik ya!!</p>
      </div>
      <a href='quizmuseum'>
        <button className='button-museum'>Klik disini untuk selesaikan tantangan check !!</button>
      </a>
      <br /><br />
    </div>
  );
}

export default MuseumOfBali;

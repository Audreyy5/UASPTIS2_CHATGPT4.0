import React, { useState, useEffect } from 'react';
import './TodoList.css'; 

function TodoList({ userName }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem(`${userName}_todos`);
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      setTodos([
        { id: 1, text: 'Pergi ke museum', completed: false },
        { id: 2, text: 'Belajar Kebudayaan Bali', completed: false },
        { id: 3, text: 'Cari penyu laut', completed: false },
        { id: 4, text: 'Jalan-jalan di pantai', completed: false },
        { id: 5, text: 'Makan makanan khas Bali', completed: false }
      ]);
    }
  }, [userName]);

  const handleToggle = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem(`${userName}_todos`, JSON.stringify(updatedTodos));
  };

  return (
    <div className="todo-list">
      <h2 className="todo-header">Ide Kegiatan Hari Ini :</h2>
      {todos.map(todo => (
        <div key={todo.id} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          <span className="todo-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TodoList;

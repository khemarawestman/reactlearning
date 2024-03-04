import React, { useState } from 'react';
import './TodoList.css'; // Assuming you have a CSS file for styling

function TodoList() {
  const [todos, setTodos] = useState(['Buy coffee','Coke','Soda']);
  const [newTodo, setNewTodo] = useState(''); 

  const handleInputChange = (e) => {
    setNewTodo(e.target.value); 
  };

  const addTodo = (e) => {
    e.preventDefault(); 
    if (!newTodo.trim()) return; 
    setTodos([...todos, newTodo]); 
  };

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> 
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoList;

import React, { useState } from 'react';

const TodoListPage = ({ todos, onDelete, onComplete }) => {
  return (
    <div>
  
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => onDelete(index)} style={{padding:"10px",margin:"5px",color:"pink",background:"gray",border:"none",borderRadius:"10px",}}>Delete</button>
            <button onClick={() => onComplete(index)} style={{padding:"10px",margin:"5px",color:"pink",background:"gray",border:"none",borderRadius:"10px",}}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos([...todos, { text: todoText, completed: false }]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Enter your todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
style={{padding:"10px",margin:"20px",borderColor:"blue",borderRadius:"6px"}}
      />
      <TodoListPage todos={todos} onDelete={deleteTodo} onComplete={completeTodo} />
    </div>
  );
};

export default Todo;

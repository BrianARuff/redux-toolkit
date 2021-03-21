import React from 'react';
import './App.css';
import TodoList from "./features/todos/TodoList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;

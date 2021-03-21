import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, addTodo, deleteTodo } from "./todoSlice";

function TodoList() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ item: "" });

  const handleInput = (e) => {
    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(formData.item));
  };

  const handleStrikeThroughTodo = (e) => {
    e.target.style.textDecoration !== "line-through"
      ? (e.target.style.textDecoration = "line-through")
      : (e.target.style.textDecoration = "none");
  };

  const handleMouseOver = (e) => {
    console.log("Touch");
    e.target.style.cursor = "pointer";
  };

  const handleDeleteTodo = (e, index) => {
    e.preventDefault();
    console.log("index", index);
    dispatch(deleteTodo(index));
  };

  return (
    <form>
      {todos.map((todo, index) => {
        return (
          <div key={Math.random() * 1000}>
            {console.log(index)}
            <li onMouseOver={handleMouseOver} onClick={handleStrikeThroughTodo}>
              {todo}
            </li>
            <button onClick={(e) => handleDeleteTodo(e, index)}>
              Delete Todo
            </button>
          </div>
        );
      })}
      <div>
        <input name="item" onChange={handleInput} type="text" id="addTodo" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </form>
  );
}

export default TodoList;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTodo from "../../EditTodo";
import { selectTodos, addTodo, deleteTodo, editTodo } from "./todoSlice";

function TodoList() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ item: "", editItem: "" });
  const [showEditTodo, setShowEditTodo] = useState(false);

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
    e.target.style.cursor = "pointer";
  };

  const handleDeleteTodo = (e, index) => {
    e.preventDefault();
    dispatch(deleteTodo(index));
  };

  const handleShowEditTodo = (e, index) => {
    e.preventDefault();
    console.log(e.target);
    setShowEditTodo(!showEditTodo);
  };

  return (
    <form>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <li onMouseOver={handleMouseOver} onClick={handleStrikeThroughTodo}>
              {todo}
            </li>
            <button onClick={(e) => handleDeleteTodo(e, index)}>
              Delete Todo
            </button>
            <EditTodo index={index} />
          </div>
        );
      })}
      <div>
        <input name="item" onChange={handleInput} type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </form>
  );
}

export default TodoList;

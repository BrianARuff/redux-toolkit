import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    console.log("Touch");
    e.target.style.cursor = "pointer";
  };

  const handleDeleteTodo = (e, index) => {
    e.preventDefault();
    console.log("index", index);
    dispatch(deleteTodo(index));
  };

  const handleShowEditTodo = (e) => {
    e.preventDefault();
    setShowEditTodo(!showEditTodo);
  };

  const handleEditTodo = (e, index) => {
    e.preventDefault();
    dispatch(editTodo({ editItem: formData.editItem, index: index }));
  };

  return (
    <form>
      {todos.map((todo, index) => {
        return (
          <div key={todo + index}>
            <li onMouseOver={handleMouseOver} onClick={handleStrikeThroughTodo}>
              {todo}
            </li>
            <button onClick={handleShowEditTodo}>Edit</button>
            <button onClick={(e) => handleDeleteTodo(e, index)}>
              Delete Todo
            </button>
            <div style={{ display: showEditTodo ? "block" : "none" }}>
              <input name="editItem" onChange={handleInput} type="text" />
              <button
                style={{
                  width: "103%",
                  margin: "1rem 0 0 0",
                }}
                onClick={(e) => handleEditTodo(e, index)}
              >
                Edit Todo
              </button>
            </div>
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

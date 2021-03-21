import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../src/features/todos/todoSlice";

export default function EditTodo(props) {
  const dispatch = useDispatch();
  const [showEditTodo, setShowEditTodo] = useState(false);
  const [formData, setFormData] = useState({ item: "", editItem: "" });

  const handleInput = (e) => {
    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleShowEditTodo = (e, index) => {
    e.preventDefault();
    console.log(e.target);
    setShowEditTodo(!showEditTodo);
  };

  const handleEditTodo = (e, index) => {
    e.preventDefault();
    dispatch(editTodo({ editItem: formData.editItem, index: index }));
  };
  return (
    <>
      <button onClick={(e) => handleShowEditTodo(e)}>Edit</button>

      <input
        style={{ display: showEditTodo ? "block" : "none" }}
        name="editItem"
        onChange={handleInput}
        type="text"
      />
      <button
        style={{
          width: "103%",
          margin: "1rem 0 0 0",
        }}
        onClick={(e) => handleEditTodo(e, props.index)}
      >
        Edit Todo
      </button>
    </>
  );
}

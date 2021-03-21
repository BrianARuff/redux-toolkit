import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        value: ["take out the trash"]
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTodo: (state, action) => {
            const todoIndex = state.value.findIndex((todo, index) => index === action.payload);
            state.value.splice(todoIndex, 1);
        },
        editTodo: (state, action) => {
            console.log(state, action);
            const todoIndex = state.value.findIndex((todo, index) => index === action.payload.index);
            state.value[todoIndex] = action.payload.editItem;
        }
    }
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export const selectTodos = state => state.todos.value;

export default todoSlice.reducer;
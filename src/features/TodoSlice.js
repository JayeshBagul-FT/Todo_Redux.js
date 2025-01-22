import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    todos: [], // Todos array to store tasks
};

// Create the slice
const todoSlice = createSlice({
    name: 'todos',
    initialState, // Pass the initial state here
    reducers: {
        // Add a new todo
        addTodo: (state, action) => {
            state.todos.push({ id: Date.now(), text: action.payload });
        },
        // Remove a todo by ID
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        // Clear all todos
        clearTodos: (state) => {
            state.todos = [];
        },
    },
});

// Export the actions
export const { addTodo, removeTodo, clearTodos } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;
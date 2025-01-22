import { createSlice } from '@reduxjs/toolkit';


const loadTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
};

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

const initialState = {
    todos: loadTodos(), // Load from localStorage
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: Date.now(), text: action.payload });
            saveTodos(state.todos);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            saveTodos(state.todos);
        },
        clearTodos: (state) => {
            state.todos = [];
            saveTodos(state.todos);
        },
    },
});

export const { addTodo, removeTodo, clearTodos } = todoSlice.actions;
export default todoSlice.reducer;
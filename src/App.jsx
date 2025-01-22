import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, clearTodos } from './features/TodoSlice';

function App() {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === '') return;
    dispatch(addTodo(task));
    setTask('');
  };

  return (
        <div className="flex flex-col items-center mt-10 space-y-6">
          <h1 className="text-4xl font-bold text-blue-600 animate-pulse">TODO List App</h1>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task"
              className="w-80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
            <button
              onClick={handleAddTask}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              Add Task
            </button>
          </div>

          <ul className="w-96 space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200"
              >
                <span className="text-gray-700">{todo.text}</span>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="px-2 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          {todos.length > 0 && (
            <button
              onClick={() => dispatch(clearTodos())}
              className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition duration-200"
            >
              Clear All
            </button>
          )}

          <div className="mt-6">
            <p className="text-gray-500 text-sm">Manage your tasks efficiently 💡</p>
          </div>
        </div>
  );
}

export default App;

// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>To-Do List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;

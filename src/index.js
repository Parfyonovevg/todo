import React from 'react';
import { createRoot } from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchBar from './components/search-bar';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make React App', important: true, id: 2 },
    { label: 'Drink Beer', important: false, id: 3 },
  ];

  return (
    <div className='todo-app'>
      <AppHeader toDo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchBar />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

root.render(<App />);

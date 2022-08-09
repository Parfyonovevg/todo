import React from 'react';
import { createRoot } from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchBar from './components/search-bar';
import TodoList from './components/todo-list';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchBar />
      <TodoList />
    </div>
  );
};

root.render(<App />);

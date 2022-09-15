import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchBar from './components/search-bar';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import ItemAddForm from './components/item-add-form';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createToDoItem('Drink Coffee'),
      this.createToDoItem('Make some app'),
    ],
    term: '',
    filter: 'all',
    isPlaying: false,
    timer: null,

    activeButton: null,
  };

  createToDoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newData = todoData.filter((el, i) => i !== idx);
      return {
        todoData: newData,
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  addElement = (text) => {
    const newElement = this.createToDoItem(text);

    this.setState(({ todoData }) => {
      const newData = [...todoData, newElement];

      return {
        todoData: newData,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  timer() {
    this.setState((state) => state.timer++);
  }

  onClickPlay = (id) => {
    if (id === this.state.activeButton) {
      this.setState((state) => (state.timer = 0));
    }

    this.setState((state) => (state.isPlaying = !state.isPlaying));
    this.setState((state) => (state.activeButton = id));
    this.timerId = setInterval(this.timer.bind(this), 1000);

    console.log(id);
  };

  onClickStop = (id) => {
    clearInterval(this.timerId);
    this.setState((state) => (state.isPlaying = !state.isPlaying));
    console.log(id);
  };

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className='top-panel d-flex'>
          <SearchBar onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          isPlaying={this.state.isPlaying}
          onClickPlay={this.onClickPlay}
          onClickStop={this.onClickStop}
          activeButton={this.state.activeButton}
        />
        <ItemAddForm addElement={this.addElement} />
        {this.state.timer}
      </div>
    );
  }
}

root.render(<App />);

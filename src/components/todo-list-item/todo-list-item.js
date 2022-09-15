import React, { Component } from 'react';
import './todo-list-item.css';
export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
      onClickPlay,
      onClickStop,
      isPlaying,

      activeButton,
    } = this.props;

    let classNames = 'todo-list-item';

    let disableOrNot = true;

    if (this.props.id === activeButton) {
      disableOrNot = false;
    }

    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className='todo-list-item-label' onClick={onToggleDone}>
          {label}
        </span>
        {isPlaying ? (
          <button disabled={disableOrNot} onClick={onClickStop}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-stop-btn'
              viewBox='0 0 16 16'
            >
              <path d='M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z' />
              <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z' />
            </svg>{' '}
          </button>
        ) : (
          <button className='got' onClick={onClickPlay}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-play'
              viewBox='0 0 16 16'
            >
              <path d='M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z' />
            </svg>
          </button>
        )}
        <button
          type='button'
          className='btn btn-outline-danger btn-sm float-right'
          onClick={onDeleted}
        >
          <i className='fa fa-trash ' />
        </button>

        <button
          type='button'
          className='btn btn-outline-success btn-sm float-right'
          onClick={onToggleImportant}
        >
          <i className='fa fa-exclamation' />
        </button>
      </span>
    );
  }
}

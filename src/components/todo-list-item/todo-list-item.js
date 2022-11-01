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
      onPlayClick,
      onStopClick,
      isPlaying,
      timer,
      activeButton,
    } = this.props;

    let classNames = 'todo-list-item';

    const isPlayDisabled = this.props.id !== activeButton;

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
        {!isPlayDisabled && <span>{timer}</span>}
        {isPlaying ? (
          <button
            type='button'
            className='btn btn-outline-danger btn-sm float-right'
            disabled={isPlayDisabled}
            onClick={onStopClick}
          >
            <i className='fa fa-stop' />
          </button>
        ) : (
          <button
            type='button'
            className='btn btn-outline-success btn-sm float-right'
            onClick={onPlayClick}
          >
            <i className='fa fa-play' />
          </button>
        )}
        <button
          type='button'
          className='btn btn-outline-danger btn-sm float-right'
          onClick={onDeleted}
        >
          <i className='fa fa-trash' />
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

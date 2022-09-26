import React, { Component } from 'react';
import StopButton from '../icons/StopButton';
import PlayButton from '../icons/PlayButton';
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
        {isPlaying ? (
          <button disabled={isPlayDisabled} onClick={onStopClick}>
            <StopButton />
          </button>
        ) : (
          <button className='got' onClick={onPlayClick}>
            <PlayButton />
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

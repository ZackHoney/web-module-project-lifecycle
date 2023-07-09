import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form id='todoForm' onSubmit={this.props.onTodoFormSubmit}>
          <input
            value={this.props.todoNameInput}
            onChange={this.props.onTodoNameInputChange}
            type='text'
            placeholder='Type todo'>
          </input>
          <input type='submit'></input>
        </form>
        <button
          onClick={this.props.toggleShowCompleted}
        >
          {this.props.showCompleted ? 'Hide' : 'Show'} Completed
        </button>
      </>
    )
  }
}

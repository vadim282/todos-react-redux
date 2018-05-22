import React from 'react';
import './style.css';


class TodoAddFrom extends React.Component {

    addNewList = (e) => {
		e.preventDefault();
		const value = this.todoText.value;

		if(value.length !== 0) {
			this.props.addList(value);
			this.todoText.value = null;
		}
	};

	render(){
		return (
			<div className='form-wrapper'>
				<form className='form'>
					<input
						type='text'
						className='form-todo-text'
						placeholder='Add list'
						ref={(node) => {this.todoText = node; }}
					/>
					<button className='form-add-btn' onClick={this.addNewList}>Add</button>
				</form>

			</div>
		)
	}
}

export default TodoAddFrom
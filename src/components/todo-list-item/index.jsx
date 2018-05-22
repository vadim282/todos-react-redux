import React from 'react';
import './style.css';

function TodoListItem(props){
	const deleteThisItem = (e) => {
		e.preventDefault();
		props.deleteItem(props.id)
	};

	const toggleStatus = (e) => {
		props.toggleStatus(props.id)
	};

	let itemClassNameWithHisStatus = "todo-list-item";
	if(props.status) {
		itemClassNameWithHisStatus += ' checked';
	}

	return(
		<li className={itemClassNameWithHisStatus} id={props.id}>
			<input type='checkbox' className='todo-status' onClick={toggleStatus}/>
			<p className='todo-content'>{props.value}</p>
			<div className='todo-operate-btn'>
				<button	className='todo-delete todo-btn' onClick={deleteThisItem}>Delete</button>
			</div>
		</li>
	)
}

export default TodoListItem
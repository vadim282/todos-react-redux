import React from 'react';
import TodoListItem from '../todo-list-item'


class TodoList extends React.Component {

	render(){
		console.log(this.props)
		const todoItems = this.props.items.map((item) => {
			return <TodoListItem
				value={item.value}
				key={item.id}
				id={item.id}
				status={item.status}
				deleteItem={this.props.deleteList}
				toggleStatus={this.props. toggleListStatus}
						/>
		});
		return (
			<ul>
				{todoItems}
			</ul>
		)
	}
}

export default TodoList
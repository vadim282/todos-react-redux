import React from 'react';
import List from '../../containers/List'
import AddForm from '../../containers/AddForm'

import Header from '../header'

const TodoBox = () => {
	return (
		<div>
			<Header />
			<List />
			<AddForm />
		</div>
	)
}

export default TodoBox
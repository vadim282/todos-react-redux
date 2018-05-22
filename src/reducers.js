const INIT = {
	items: [],
};

const addItemHandler = (state, payload) => {
	const itemData = {id: Math.random(), value: payload, status: false};
	const updatedItems = state.items.concat(itemData)

	return {...state, items: updatedItems}
};

const deleteItemHandler = (state, payload) => {
	const updatedItems = state.items.filter((item) => {
  	return item.id !== payload
	});

	return {...state, items: updatedItems}
};

const toggleItemStatusHandler = (state, payload) => {
	const updatedItems = state.items.map((item) => {
		if(item.id === payload) {
			return {...item, status: !item.status}
		}
		return item;
	});

	return {...state, items: updatedItems}
};


export default (state = INIT, action) => {
	const {type, payload} = action;

	switch (type) {
		case 'ADD_LIST':
			return addItemHandler(state, payload);

		case 'DELETE_LIST':
			return deleteItemHandler(state, payload);

		case 'TOGGLE_LIST_STATUS':
			return toggleItemStatusHandler(state, payload);

		default:
			return state;
	}
}

export const addList = (value) => (
	{
		type: 'ADD_LIST',
		payload: value,
	}
);

export const deleteList = (id) => (
	{
		type: 'DELETE_LIST',
		payload: id,
	}
);

export const toggleListStatus = (id) => (
	{
		type: 'TOGGLE_LIST_STATUS',
		payload: id,
	}
);



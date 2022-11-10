import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	const todos = useSelector((state) =>
		state.tasks.value.filter((todo) => todo.done === true)
	);

	return <h4 className='mt-3'>Tasks to be done: {todos.length}</h4>;
};

export default TotalCompleteItems;
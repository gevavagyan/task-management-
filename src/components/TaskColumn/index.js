import React, { useMemo } from 'react';
import Task from '../Task/Task';

function Column({ columnStyle, tasks, type, heading }){
	const filteredTasks = useMemo(() => tasks.filter((item) => item.type === type), [tasks]);

    return (
		<div className={columnStyle}>
			<h3 className={heading}>{type.toUpperCase()}</h3>
			{!!filteredTasks.length ? filteredTasks.map((task) => <Task key={task.id}  {...task}/>) : <h3>This column is empty</h3>}
		</div>
    );
}

export default Column;
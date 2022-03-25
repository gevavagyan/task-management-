import React from 'react';
import Icon from '../Icon/Icon';
import {ACTION_TYPES, useStore} from '../../store/store';
import { useStyles } from './styles';

function Task ({ title, description, priority, id }){
	const styles = useStyles();
	const { dispatch } = useStore();

	const handleEditClick = () => {
		dispatch({ type: ACTION_TYPES.TOGGLE_MODAL, id })
	}

    return (
        <div onClick={handleEditClick} className={styles.root}>
			<div className={styles.iconWrapper}>
				<Icon name='edit' />
			</div>
            <h3>{title}</h3>
			<span>{description}</span>
			<span>Priority: {priority}</span>
        </div>
    );
}

export default Task;
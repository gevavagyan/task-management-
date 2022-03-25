import {createContext, useContext} from 'react';
import { tasksMockData } from './tasksMockData';

const TASK_TYPES = {
	TODO: 'todo',
	DOING: 'doing',
	DONE: 'done',
}

const ACTION_TYPES = {
	ADD_TASK: 'ADD_TASK',
	DELETE_TASK: 'DELETE_TASK',
	EDIT_TASK: 'EDIT_TASK',
	TOGGLE_MODAL: 'TOGGLE_MODAL',
}

function reducer(state, action) {
	switch (action.type) {
		case ACTION_TYPES.TOGGLE_MODAL: {
			return {...state, isModalOpen: !state.isModalOpen, currentId: action.id};
		}
		case ACTION_TYPES.ADD_TASK: {
			return {...state, tasks: [...state.tasks, action.payload], isModalOpen: false};
		}
		case ACTION_TYPES.DELETE_TASK: {
			return {...state, tasks: state.tasks.filter(task => task.id !== action.payload.id)};
		}
		case ACTION_TYPES.EDIT_TASK: {
			return {...state, isModalOpen: false, tasks: state.tasks.map(task => {
					if(task.id === action.payload.id) {
						return {...task, ...action.payload}
					} else {
						return task
					}
				})};
		}
	}
}

const defaultState = {
	tasks: tasksMockData,
	isModalOpen: false,
}

const Store = createContext(defaultState);

const useStore = () => useContext(Store);

function ContextProvider({ children, value }) {
	return (
		<Store.Provider value={value}>
			{children}
		</Store.Provider>
	);
}



export { useStore, reducer, ContextProvider, TASK_TYPES, ACTION_TYPES, defaultState };
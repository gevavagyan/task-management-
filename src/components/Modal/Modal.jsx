import React, { useEffect, useRef, useState } from 'react';
import { ACTION_TYPES, useStore } from '../../store/store';
import { useClickOutside } from '../../hooks/useClickOutside';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import { useStyles } from './styles';

function Modal ({ closeModal }){
    const styles = useStyles();
    const modalRef = useRef();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');
    const [priority, setPriority] = useState('low');
    const { dispatch } = useStore();
    const { state: { tasks, currentId } } = useStore('');
    
    useEffect(() => {
        const editData = tasks.find(item => item.id === currentId);
        if(editData) {
            setTitle(editData.title);
            setDescription(editData.description);
            setPriority(editData.priority);
            setStatus(editData.type);
        }
    }, [tasks, currentId])


    const addTask = () => {
        console.log('Log ::: CALLED ::: ');
        if(!!title && !!description) {
            if(!currentId) {
                dispatch({
                    type: ACTION_TYPES.ADD_TASK,
                    payload: {
                        id: Math.random(),
                        type: status || 'todo',
                        title, description,
                        priority:  priority || 'low'
                    }
                });
            } else {
                dispatch({
                    type: ACTION_TYPES.EDIT_TASK,
                    payload: {
                        id: currentId,
                        type: status,
                        title,
                        description,
                        priority
                    }
                });
            }
        }
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.id);
    }

    const handlePriorityChange = (e) => {
        setPriority(e.target.id);
    }

    useClickOutside(modalRef, closeModal);

    return (
        <div className={styles.root}>
            <div ref={modalRef} className={styles.body}>
                <h1>Create Task</h1>
                <div className={styles.closeWrapper}>
                    <Icon onClick={closeModal} name='close'/>
                </div>
                <div>
                    <Input label="Title" value={title} onChange={handleTitleChange}/>
                    <Input label="Description" value={description} onChange={handleDescriptionChange}/>
                    <div className={styles.rowWrapper}>
                        <div>
                            <p>Choose a priority</p>
                            <div className={styles.priorityChooser}>
                                <label htmlFor='low'>
                                    <input type='radio' id='low' name='low' checked={priority === 'low'}  onChange={handlePriorityChange}/>
                                    <h4>Low</h4>
                                </label>
                                <label htmlFor='medium'>
                                    <input type='radio' id='medium' name='medium' checked={priority === 'medium'} onChange={handlePriorityChange} />
                                    <h4>Medium</h4>
                                </label>
                                <label htmlFor='high'>
                                    <input type='radio' id='high' name='high'  checked={priority === 'high'} onChange={handlePriorityChange}/>
                                    <h4>High</h4>
                                </label>
                            </div>
                        </div>
                        <div>
                            <p>Choose a Status</p>
                            <div className={styles.priorityChooser}>
                                <label htmlFor='todo'>
                                    <input type='radio' id='todo' name='todo' checked={status === 'todo'}  onChange={handleStatusChange}/>
                                    <h4>Todo</h4>
                                </label>
                                <label htmlFor='doing'>
                                    <input type='radio' id='doing' name='doing' checked={status === 'doing'} onChange={handleStatusChange} />
                                    <h4>Doing</h4>
                                </label>
                                <label htmlFor='done'>
                                    <input type='radio' id='done' name='done'  checked={status === 'done'} onChange={handleStatusChange}/>
                                    <h4>Done</h4>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button onClick={closeModal}>Cancel</Button>
                    <Button onClick={addTask} diabled={!!title || !!description}>Save</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
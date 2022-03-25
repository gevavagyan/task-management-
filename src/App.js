import { useReducer } from 'react';

import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Column from './components/TaskColumn';

import {
    ACTION_TYPES,
    ContextProvider,
    defaultState,
    TASK_TYPES,
    reducer
  } from './store/store';
import { useStyles } from './styles';

function App() {
  const styles = useStyles();
  const [state, dispatch] = useReducer(reducer, defaultState);


  const openModal = () => {
      dispatch({ type: ACTION_TYPES.TOGGLE_MODAL })
  }

  const closeModal = () => {
      dispatch({ type: ACTION_TYPES.TOGGLE_MODAL })
  }

  const { tasks, isModalOpen } = state;

  return (
        <ContextProvider value={{ state, dispatch }}>
            <div>
                <Header openModal={openModal}/>
                <div className={styles.root}>
                    {isModalOpen && <Modal  closeModal={closeModal}/>}
                    <div className={styles.tasksContainer}>
                        <Column  tasks={tasks} columnStyle={styles.taskColumn}  type={TASK_TYPES.TODO}/>
                        <Column  tasks={tasks} columnStyle={styles.taskColumn}  type={TASK_TYPES.DOING}/>
                        <Column  tasks={tasks} columnStyle={styles.taskColumn}  type={TASK_TYPES.DONE}/>
                    </div>
                </div>
            </div>
        </ContextProvider>
  )
}

export default App;

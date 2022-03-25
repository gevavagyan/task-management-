import React from 'react';
import { useStyles } from './styles';
import Button from '../Button/Button';

function Header ({ openModal }){
	const styles = useStyles();
    return (
        <header className={styles.root}>
			<Button onClick={openModal}>Add Task</Button>
        </header>
    );
}

export default Header;
import React from 'react';
import { useStyles } from './styles';

function Button ({ children, onClick, disabled }){
    const styles = useStyles();
    return (
        <button onClick={onClick} className={styles.root}>
            {children}
        </button>
    );
}

export default Button;
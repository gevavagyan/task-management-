import React from 'react';
import { useStyles } from './styles';

function Input ({ value, onChange, label }){
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <label htmlFor={label}>{label}</label>
            <input className={styles.input} id={label} onChange={onChange} value={value} type="text"/>
        </div>);
}

export default Input;
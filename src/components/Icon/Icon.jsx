import React from 'react';
import edit from './../../assets/edit.svg';
import close from './../../assets/close.svg';
import { useStyles } from './styles';

const icons = {
    edit: edit,
    close: close,
};

function Icon ({ onClick, name }){
    const styles = useStyles();
    return (
        <div onClick={onClick} className={styles.root}>
            <img className={styles.icon} src={icons[name]} alt="edit"/>
        </div>
    );
}

export default Icon;
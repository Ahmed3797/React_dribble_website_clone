import React from 'react';
import styles from './lfl.module.css'

const Lheading = (props) => {
    return (
        <p className={styles.lfl}>{props.title}</p>
    );
}

export default Lheading;

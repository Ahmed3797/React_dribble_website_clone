import React from 'react';
import styles from './crts.module.css'

const Crt = (props) => {
    return (
        <div className={styles.ds}>
            <img src={props.item.pic} alt="" />
            <div className={styles.ss}>
                <p id={styles.ps}>{props.item.name}</p>
                <p>{props.item.item}</p>
            </div>
        </div>
    );
}

export default Crt;

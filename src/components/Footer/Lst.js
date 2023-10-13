import React from 'react';
import styles from './lpt.module.css'


const Lst = (props) => {
    return (
        <div className={styles.mse}>
        <h3>{props.name}</h3>
          <ul className={styles.us}>
        {props.list.map((item)=>
        {
            return <li className={styles.ls}>{item}</li>
        })}

          </ul>  
        </div>
    );
}

export default Lst;

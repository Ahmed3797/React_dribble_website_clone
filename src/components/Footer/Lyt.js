import React from 'react';
import styles from "./Lyt.module.css"

const Lyt = (props) => {
    return (
        <div className={styles.ds} >
            <img src={props.item} alt="" />
        </div>
    );
}

export default Lyt;

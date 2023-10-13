import React from 'react';
import styles from './bts.module.css'

const Bts = (props) => {
    function OnCls()
    {
     props.change(props.name)
    }
    return (
        <div className={styles.jkl}>
    
            <button style={{backgroundColor:props.color,color:props.tcolor}} onClick={OnCls}>{props.name}</button>
        </div>
    );
}

export default Bts;

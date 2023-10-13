import React from 'react';
import styles from './fur.module.css'
const Fur = (props) => {
    return (
        <div className={styles.card} style={{backgroundColor:props.item.color}}>
        
        
           <div className={styles.upp_card}>
           <p id={styles.save}>Save</p>
        <p  style={{color:props.item.wordcolor}} id={styles.prc}><sup>$</sup>{props.item.price}</p>
        <p id={styles.explore}>Explore Our Furniture & Home Furnishing Range</p>
            

           </div>
           <div className={styles.lowcard}>
           <img src={props.item.pic} alt="" />
           </div>
        </div>
    );
}

export default Fur;

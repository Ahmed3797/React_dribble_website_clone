import React from 'react';
import styles from './cbh.module.css'

const CashBack = () => {
    return (
        <div className={styles.mn}>
       <div className={styles.card}>
       <p id={styles.big}>Get 5% Cash Back On $200</p>
       <p id={styles.small}>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
       <button id={styles.cts}>Learn More</button>

       </div>
        </div>
    );
}

export default CashBack;

import React from 'react';
import styles from './shj.module.css'
const Shj = () => {
    return (
        <div className={styles.banner}>
            <div>
         <p id={styles.ct}>Get 5% Cash Back</p>
         <p id={styles.dt}>On Shopcart.com</p>
         <button>Learn More</button>
            </div>
            <div className={styles.mds}>
                <img id={styles.one}  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png" alt="" />
                <img id={styles.two}   src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad08ebe75690_visa%20card%2002-min.png" alt="" />
                <img id={styles.three}  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea1a963f08a8c3dcd7c945_visa%20card%2003.svg" alt="" />

            </div>
        </div>
    );
}

export default Shj;

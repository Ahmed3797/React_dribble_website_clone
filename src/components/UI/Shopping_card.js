import React,{useEffect} from 'react';
import styles from './sps.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShoppingCard = (props) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className={styles.kjl} style={{width:props.wid===true?"300px":"400px"}} data-aos="fade-up">
        <div className={styles.up}>
        <img src={props.item.pic} alt="" />
        </div>
        <div className={styles.down}>
        <div className={styles.pl}>
            <p id={styles.title}>{props.item.name}</p>
            <p id={styles.amount}><sup>$</sup>{props.item.price}<sup>.00</sup></p>
            </div>
            <p id={styles.subtitile}>{props.item.sname}</p>
            <div style={{display:"flex",alignItems:"center"}}>
            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" />
            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" />
            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" />
            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" />
            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" alt="" />
            <p>(123)</p>
            </div>
            <button id={styles.bty}>Add to Cart</button>
            
        </div>
        <div className={styles.love_box}>
        <img id={styles.love} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9df775b939f51a0b22f6d_Icon.svg" alt="" />
        </div>
        </div>
    );
}

export default ShoppingCard;

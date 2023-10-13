import React,{useEffect} from 'react';
import styles from './cards.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Cards = (props) => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className={styles.cafd} data-aos="zoom-in-up" data-aos-duration="2000">
        <img src={props.item.pic} alt="" srcset="" />
            <p id={styles.nms}>{props.item.name}</p>
        </div>
    );
}

export default Cards;

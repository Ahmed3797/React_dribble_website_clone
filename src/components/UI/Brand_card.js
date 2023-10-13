import React,{useEffect} from 'react';
import styles from './brnd_card.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BrandCard = (props) => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div data-aos="fade-up" aos-duartion="3000" className={styles.dfd}>
            <img src={props.item.pic} alt="" />
            <div>
                <p id={styles.head}>{props.item.name}</p>
                <p id={styles.benth}>{props.item.sname}</p>
            </div>
        </div>
    );
}

export default BrandCard;

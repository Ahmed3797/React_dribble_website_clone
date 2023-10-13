import React,{useEffect} from 'react';
import styles from './front.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Front = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
        <div className={styles.fp} data-aos="fade-left" data-aos-duaration="3000">
        <div data-aos="fade-down"
     data-aos-anchor-placement="top-bottom">
        <img id={styles.p1} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e75b939fd1159c029e_tour-min.png" alt="" />
        </div>
        <div  data-aos="fade-down"
     data-aos-anchor-placement="top-bottom">
        <img  id={styles.p2} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e660afc23a10a53523_other-min.png" alt="" />
        </div>
        <div data-aos="fade-down"
     data-aos-anchor-placement="top-bottom">
        <img  id={styles.p3} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9c0607f75e4aad54b94a0_ele.png" alt="" /> 
       </div>
       <div  data-aos="fade-down"
     data-aos-anchor-placement="top-bottom">
        <img id={styles.p4} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7037f3b07ebcf202d_snaks-min.png" alt="" />
        </div>
       <div   className={styles.kjs}>

        <div  data-aos="fade-up"
     data-aos-duration="3000">
        <p id={styles.hd}>Shopping And Department Store</p>
        </div>
        <div  data-aos="fade-up"
     data-aos-duration="1000">
        <p id={styles.ld}>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
        </div>
        <div  data-aos="fade-up"
     data-aos-duration="1000">
        <button>Learn More</button>
        </div>
       </div>
        </div>
        
        </>
    );
}

export default Front;

import React,{useEffect} from 'react';
import styles from './topup.module.css'
import Cards from './Cards'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lheading from '../UI/Lheading';

const Topup = () => {
  
    let list=[
        {name:"Furniture",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png"},
        {name:"HandBag",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png"},
        {name:"Books",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png"},
        {name:"Tech",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png"},
        {name:"Sneakers",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png"},
        {name:"Travel",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png"},
    ]
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
        <Lheading title="Shop Our Top Categories "/>
        <div className={styles.tops}>
            {list.map((item)=>
            {
                return <Cards  item={item}/>
            })}
        </div>
 
        </>
    );
}

export default Topup;

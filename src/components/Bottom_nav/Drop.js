import React from 'react';
import styles from './drop.module.css'
import Crt from './crt'
import Widthwrap from '../Wrp/Widthwrap';

const Drop = () => {
  let lst=[
   {name:"Furnitue",item:"240 item available",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png"},
   {name:"show",item:"240 item available",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png"},
   {name:"Laptop",item:"240 item available",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png"},
   {name:"Handbag",item:"240 item available",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png"},
   {name:"Headphone",item:"240 item available",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png"},
   {name:"Book",item:"240 item available",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png"},


  ]

    return (
        <div className={styles.drp}>
            
           <Widthwrap>
            <h3>Popular Categories</h3>
            <hr />
            <div className={styles.its}>
            {lst.map((value)=>{
             return <Crt item={value} />

            })}

            </div>
            </Widthwrap>
        </div>
    );
}

export default Drop;

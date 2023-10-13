import React from 'react';
import Lheading from '../UI/Lheading';
import Fur from '../UI/Fur';
import styles from './din.module.css'


const Dins = () => {

    let list=
    [
       {wordcolor:"#cb9917",price:"100",color:"#f2e4d9",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png"}, 
       {wordcolor:"#961f1f",price:"29",color:"#f9dcdc",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png"},
       {wordcolor:"#94623c",price:"67",color:"#f2e4d9",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png"},
       {wordcolor:"#003d29",price:"59",color:"#d2f7ec",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png"},
    ]
    return (
        <>
        <Lheading title="Get UP To 70% Off"/>
        <div className={styles.dns}>
            {list.map((item)=>
            {
               return <Fur item={item}/>
            })}
        </div>
        </>
    );
}

export default Dins;

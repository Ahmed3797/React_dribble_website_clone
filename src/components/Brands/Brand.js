import React from 'react';
import styles from './brnd.module.css'
import BrandCard from '../UI/Brand_card';
import Lheading from '../UI/Lheading';
const Brand = () => {
 let list=[
    {name:"Staples",sname:"Delivery with in 24 hours",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png"},
    {name:"Sprouts",sname:"Delivery with in 24 hours",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png"},
    {name:"Grocery Outlet",sname:"Delivery with in 24 hours",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png"},
    {name:"Mollie Stones",sname:"Delivery with in 24 hours",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png"},
    {name:"Sports Basement",sname:"Delivery with in 24 hours",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png"},
    {name:"Container Store",sname:"Delivery with in 24 hours",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png"},
    {name:"Target",sname:"Delivery with in 24 hours",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png"},
    {name:"Bevmo!",sname:"Delivery with in 24 hours",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png"},
 ]

    return (
        <>
        <Lheading  title="Choose By Brands"/>
        <div className={styles.brand}>
        {list.map((item)=>{
           return <BrandCard item={item}/>
        })}
        </div>
        </>
    );
}

export default Brand;

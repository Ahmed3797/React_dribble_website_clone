import React from 'react';
import Lheading from '../UI/Lheading';
import ShoppingCard from '../UI/Shopping_card';
import styles from './wp.module.css'

const Wp = () => {
    let list=[
        {  name:"Gaming Headphone",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png",sname:"Table with air purifier, stained veneer/black",price:"239"},
        {  name:"Base Camp Duffel M",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png",sname:"selfie mode ad selfie miror,Macro mode",price:"159"},
        {  name:"TomFord Watch",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74b769109fd2f245a_tomford%20watch-min.png",sname:"Table with air purifier, stained veneer/black",price:"39"},
    ]
    return (
        <>
        <Lheading title="Weekly Popular Products" />
        <div className={styles.hui}>
        {list.map((item)=>
            {
                return <ShoppingCard item={item}/>
            })}
        </div>
        </>
    );
}

export default Wp;

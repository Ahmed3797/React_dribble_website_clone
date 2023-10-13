import React from 'react';
import styles from './bst.module.css'
import ShoppingCard from '../UI/Shopping_card';
import Lheading from '../UI/Lheading';
const Bst = () => {
    let list=[
        {  name:"HomePod Mini",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",sname:"Table with air purifier, stained veneer/black",price:"239"},
        {  name:"Insta Mini 9",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png",sname:"selfie mode ad selfie miror,Macro mode",price:"99"},
        {  name:"Base Camp Duffel",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png",sname:"Table with air purifier, stained veneer/black",price:"159"},
    ]
    return (
        <>
        <Lheading title="Todays Best Deals For You"/>
        <div className={styles.ksl}>
           
            {list.map((item)=>
            {
                return <ShoppingCard item={item}/>
            })}
        </div>
        </>
    );
}

export default Bst;

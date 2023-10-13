import React from 'react';
import Lyt from './Lyt';

import styles from './mst.module.css'
let list=[
"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png",
"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png",
"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png",
"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png",
"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png",
"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png",
"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png",
"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png",



]

const Mst = () => {
    return (
        <div className={styles.lkm}>
            
            <div>
                <img style={{padding:"0",margin:"0"}} src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="" />
            </div>
            <div style={{width:"300px",color:"#B5B3B3"}}><p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p></div>

            <div>
                <h2 style={{fontWeight:'normal'}}>Accepted Payments</h2>
                <div className={styles.kj}>
                {list.map((item)=>
                {
                   return <Lyt item={item}/>
                })}
                </div>
            </div>
        </div>
    );
}

export default Mst;

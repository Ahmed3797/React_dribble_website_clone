import React from 'react'
import styles from './btm.module.css'
import Cat from "./Cat"

export default function Bottomnav() {
  return (
    <div className={styles.oo}>
      
    <div  className={styles.title}>
    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="" />  
    </div>
    <Cat/>
    <div className={styles.abc}>Deals</div>
    <div className={styles.abc}>WhatsNew</div>
    <div className={styles.abc}>Delievery</div>
    <div className={styles.abc}>Search Product</div>


    <div className={styles.acc}>
    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9d6ee83660ebe1de_user.png" alt="" />
    <p>Account</p>
    </div>



    <div className={styles.cart}>
  <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9b865e78d4ff6b8d_shopping-cart-add.png" alt="" />
        <p>Cart</p>
    </div>



    </div>
  )
}

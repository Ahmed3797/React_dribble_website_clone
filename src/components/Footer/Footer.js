import React from 'react';
import Mst from './Mst';
import styles from './footer.module.css'
import Lst from './Lst';
let dep=[
    "Fashion",
    "Education Product",
    "Frozen Food",
    "Beverages",
    "Organic Grocery",
    "Office Supplies",
    "Beauty Products",
    "Books",
    "Electronics & Gadget",
    "Travel Accessories",
    "Fitness",
    "Sneakers",
    "Toys",
    "Furniture",

]

let Abus=
[
"About Shopcart",
"Careers",
"News & Blog",
"Help",
"Press Center",
"Shop By Location",
"Shopcart Brands",
"Affiliate & Partners",
"Ideas & Guides",
]

let Services=
[
"Gift Card",
"Mobile App",
"Shipping & Delivery",
"Order Pickup",
"Account Signup",
]


let help=[
"Shopcart Help",
"Returns",
"Track Orders",
"Contact Us",
"Feedback",
"Security & Fraud",
]

const Footer = () => {
    return (
        <>
        <div className={styles.fts}>
            <Mst/>
             <Lst name="Department" list={dep}/>
             <Lst name="About US" list={Abus}/>
             <Lst name="Services" list={Services}/>
             <Lst name="Help" list={help}/>
        </div>
    
        </>
    );
}

export default Footer;

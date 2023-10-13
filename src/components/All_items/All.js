import React,{useReducer} from 'react';
import Lheading from '../UI/Lheading';
import Bts from './Bts';
import styles from './all.module.css'
import ShoppingCard from '../UI/Shopping_card';

let btn_list=
[
    {name:"Gadgets",color:"",tcolor:""},
    {name:"Fashion",color:"",tcolor:""},
    {name:"Toys",color:"",tcolor:""},
    {name:"Education",color:"",tcolor:""},
    {name:"Beauty",color:"",tcolor:""},
    {name:"Fitness",color:"",tcolor:""},
    {name:"Furniture",color:"",tcolor:""},
    {name:"Sneakers",color:"",tcolor:""},

    
]

let lst=[
    {name:"Laptop sleeve MacBook",sname:"Organic Cotton, fairtrade certified",price:"59",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png",wid:true},
    {name:"AirPods Max",sname:"A perfect balance of high-fidelity audio",price:"559",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png",wid:true},
    {name:"Flower Laptop Sleeve",sname:"15 in. x 10 in. -Flap top closure",price:"39 ",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",wid:true},
    {name:"Supreme Water Bottle",sname:"Table with air purifier, stained veneer/black",price:"19",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e78b497e3a5646b82f_water%20pot-min.png",wid:true},
    {name:"Laptop sleeve MacBook",sname:"Organic Cotton, fairtrade certified",price:"59",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5560c31bbfce_leptop%20sleeve%20macbook-min.png",wid:true},
    {name:"Macbook pro 13",sname:"256, 8 core GPU, 8 GB",price:"1099",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61eb4ad4af6e75689_macbook%2013-min.png",wid:true},
    {name:"HomePod mini",sname:"5 Colors Available",price:"59",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",wid:true},
    {name:"Ipad Mini",sname:"Table with air purifier, stained veneer/black",price:"539",pic:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png",wid:true},

   
]
const reducer = (state, action) => {
   

     
     let  newstate=state.map((item) => {
          if (item.name === action.name) {
               item.color="#003d29"
               item.tcolor="white"
          } 
          else{
             item.color=" "
             item.tcolor="black"
          }
          return item
        });
        


  return newstate;
        
    
  };
const All = () => {

    const [list, dispatch] = useReducer(reducer, btn_list);

function huj(name)
{
    
  let ind=btn_list.findIndex((value)=>
    {
     return value.name===name;
    })
    
        
    
    dispatch({ type: "COMPLETE", name:list[ind].name ,ind:ind});
  
}
    return (
        <>
        <Lheading title="Todays Best deals for You"/>
        <div className={styles.bn}>
            {list.map((item)=>{
               return <Bts name={item.name} change={huj} color={item.color} tcolor={item.tcolor}/>
            })}
        </div>
        <div className={styles.cards}>
       {lst.map((item)=>
       {
        return <ShoppingCard item={item}/>
       })}
        </div>
        </>
    );
}

export default All;

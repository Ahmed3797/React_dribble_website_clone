import React,{useState} from 'react';
import Drop from './Drop'
import styles from './cat.module.css'

const Cat = () => {
      const [showmodal, setshowmodal] = useState(false);
      function modalshowing()
      {
        setshowmodal((state)=>
        {
            return !state;
        })
      }
    return (
        <>
        <div className={styles.cts}>
            <select onClick={modalshowing} name="" id=""><option   value="">Categories</option></select>
            { showmodal && <Drop/>}
        </div>
       
        </>
    );
}

export default Cat;

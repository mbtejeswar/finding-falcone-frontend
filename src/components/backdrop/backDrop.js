import React from 'react';
import * as Styles from './styles.module.css';

const backdrop = (props)=>(
    props.show ? <div className={Styles.backdrop} onClick={props.close}></div> : null
)


    
  



export default backdrop;    
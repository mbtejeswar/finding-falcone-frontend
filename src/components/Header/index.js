import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import styles from './styles.module.css';


function Header(props, {heading}) {


  return (
    <header className={styles['header']}>
      <div className={styles['left-container']}>
  
        <div className={styles['text-big']}>Finding Falcon</div>
        {heading && (
          <h1 className={`${styles['text-big']} ${styles['heading']}`}>
            {heading}
          </h1>
        )}
      </div>
      <div className={styles['right-container']}>
          <div onClick={props.reset} className={styles['Reset']}>Reset</div>
          <div><a href="https://www.geektrust.in/">GeekTrust Home</a></div>
      </div>
    </header>
  );
}

Header.propTypes = {
  heading: PropTypes.string,
};

const mapDispatchToProps= (dispatch)=>(
  {
    reset:()=>dispatch({type:'RESET'})
  }

)

export default connect(null,mapDispatchToProps)(Header);

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

function Header({heading}) {
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
          <div>Reset</div>
          <div><a href="/">GeekTrust Home</a></div>
      </div>
    </header>
  );
}

Header.propTypes = {
  heading: PropTypes.string,
};

export {Header};

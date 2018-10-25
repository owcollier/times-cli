import React from 'react';
import styles from './Header.module.css';

export function HeaderBranding(props) {

  return (
    <div className={styles.branding}>
      <div>Smiley</div>
      <div></div>
      <div>Hello NYTimes!</div>
    </div>
  );

}

export default HeaderBranding;
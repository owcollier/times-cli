import React from 'react';
import styles from './Header.module.css';
import HeaderBranding from './HeaderBranding';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <div className={styles.hamburger}>
            Hello hamburger!
          </div>
          <HeaderBranding />
          <div className={styles.expanded}>
            Hello expanded!
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
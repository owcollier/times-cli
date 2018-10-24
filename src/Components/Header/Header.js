import React from 'react';
import styles from './Header.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <header className="header">
          <div className={styles.hamburger}>
            Hello hamburger!
          </div>
          <div className={styles.branding}>
            Hello branding!
          </div>
          <div className={styles.expanded}>
            Hello expanded!
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
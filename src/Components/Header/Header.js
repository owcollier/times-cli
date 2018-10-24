import React from 'react';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <header className="header">
          <div className="header-hamburger">
            Hello hamburger!
          </div>
          <div className="header-branding">
            Hello branding!
          </div>
          <div className="header-expanded">
            Hello expanded!
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

// min-width 1025px for hamburger
// max-width 1024px for expanded nav

// 
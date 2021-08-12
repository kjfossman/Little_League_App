import React from 'react';
import Lit_League_Logo from '../Lit-League-Logo.svg';
import '../css_files/Header.css';

class Header extends React.Component {
    render() {
      return (
        <div className="Header">
            
            <img src={Lit_League_Logo} alt="logo" className="logo_left"/>
            <span>Welcome to the Haines Little League</span>
            
            <img src={Lit_League_Logo} alt="logo" className="logo_right"/>
            
        </div>
      );
    }
  }


export default Header;
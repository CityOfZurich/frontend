import React, { Component } from 'react';
import './Header.sss'
import lol from '../../images/neo-logo coipy.png'

class Header extends Component {

  public onResize = () => {
    this.calcHeaderHeight()
  }

  public calcHeaderHeight = () => {
    const el = document.querySelector('.head') as HTMLElement;
    const h = el.getBoundingClientRect().height + 'px';
    (document.documentElement as HTMLElement).style.setProperty('--header-h', h);
  }

  componentDidMount() {
    this.calcHeaderHeight()
  }
    
  render() {
    return (
      <header className="head" >
        <img src={lol} alt="" onClick={()=>{window.location.pathname = '/'}}/>
        <span>
          SWISS ICO
        </span>
      </header>
    );
  }
}

export default Header;

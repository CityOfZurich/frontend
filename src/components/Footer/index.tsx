import React, { Component } from 'react';
import './Footer.sss';

class App extends Component {

  public onResize = () => {
    this.calcFooterHeight()
  }

  public calcFooterHeight = () => {
    const el = document.querySelector('.foot') as HTMLElement;
    const h = el.getBoundingClientRect().height + 'px';
    (document.documentElement as HTMLElement).style.setProperty('--footer-h', h);
  }

  componentDidMount() {
    this.calcFooterHeight()
  }

  render() {
    return (
      <footer className="foot">
        <p>Made it with</p> <span className='pulse'>❤️</span> <p>for the NEO Hackathon of Zurich</p>
      </footer>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './Negate.sss';
import img from '../../images/ko.svg';

class Negate extends Component {
  render() {
    return (
        <div className="box negate">
          <img src={img} alt=""/>
          Your Claim has been rejected... <br/> 
        </div>
    );
  }
}

export default Negate;

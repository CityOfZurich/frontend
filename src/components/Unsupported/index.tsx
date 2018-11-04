import React, { Component } from 'react';
import './Unsupported.sss';
import img from '../../images/sad.svg';

class Unsupported extends Component {

  render() {
    return (
      <div className="box unsupported">
        <img src={img} alt=""/>
          Sorry :( this delegator is not supported
      </div>
    );
  }
}

export default Unsupported;

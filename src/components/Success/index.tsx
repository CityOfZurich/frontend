import React, { Component } from 'react';
import './Success.sss';
import img from '../../images/ok.svg';

class Success extends Component {
  render() {
    return (
      <div className="box success">
          <img src={img} alt=""/>
          You were confirmed, go visit LINK
      </div>
    );
  }
}

export default Success;

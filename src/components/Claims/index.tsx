import React, { Component, ChangeEvent } from 'react';
import Success from '../Success';
import Unsupported from '../Unsupported';
import Negate from '../Negate';

interface ClaimState {
  selectValue: number;
  loading: boolean;
  status: null | 'ok' | 'ko' | 'nd'
}

interface ClaimProps {
  claimsOptions: string[]
}

class Claims extends Component<ClaimProps,ClaimState> {

  constructor(props: ClaimProps) {
    super(props)
    this.state = {
      selectValue: 1,
      loading: false,
      status: null 
    }
  }

  public handleChangeSel = ({target}: ChangeEvent) => {
    this.setState({selectValue: +(target as HTMLInputElement).value});
  }

  public choose = () => {
    if(this.state.selectValue === 1){this.setState({...this.state, status: 'ok'})}
    if(this.state.selectValue === 2){this.setState({...this.state, status: 'ko'})}
    if(this.state.selectValue === 3){this.setState({...this.state, status: 'nd'})}
  }
  
  render() {

    if (this.state.loading) return (
      <div className="login forced">
        <div id="loading"></div>
      </div>
    )

    if(this.state.status === null) {
        return (
          <div className='login'>
            <h1 className='heading'>
              Select your claim
            </h1>
                <div className='selectwrap'>
                <label>
                  <span>Select your claim:</span>
                  <select onChange={this.handleChangeSel}>
                    {this.props.claimsOptions.map((e,i) => <option key={i} value={i+1}>{e}</option>)}
                    <option key={'iLol'} value={3}>not_avail</option>
                  </select>
                </label>
                </div>
              <button className='button' style={{width: '100%'}} onClick={this.choose}>Claim</button>
          </div>
        );
    }
    if (this.state.status === 'ok') {
        return <Success />
    }
    if (this.state.status === 'ko') {
        return <Negate />
    }
    if (this.state.status === 'nd') {
        return <Unsupported />
    }
  }
}

export default Claims;
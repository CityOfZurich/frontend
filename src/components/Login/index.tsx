import React, { Component, FormEvent, ChangeEvent } from 'react';
import Neon, {wallet, api, rpc} from '@cityofzion/neon-js'

import './Login.sss';
import Claims from '../Claims';

interface LoginState {
  inputValue: string;
  loading: boolean;
  claims: string[] 
}

class Login extends Component<{},LoginState> {

  constructor(props: {}) {
    super(props)
    this.state = {
      inputValue: '',
      loading: false,
      claims: [],
    }
  }


  public tryLogin = async (event: FormEvent) => {
    event.preventDefault();
    this.setState({...this.state, loading: true}, () => {
      this.logIn(this.state.inputValue)
    })
  }

  public handleChange = ({target}: ChangeEvent) => {
    this.setState({...this.state, inputValue: (target as HTMLInputElement).value});
  }

  public logIn = async (value: string) => {
    try {
      const config = {
        name: 'PrivateNet',
        extra: {
          neoscan: 'http://localhost:4000/api/main_net'
        }
      }
      const privateNet = new rpc.Network(config)
      Neon.add.network(privateNet)

      const cnf = {
        api: new api.neoscan.instance('PrivateNet'),
        script: Neon.create.script({
          scriptHash: "33688ab15682a2253a04d9ae38a65af89ea8c9aa",
          operation: "claims",
          args: [ 0 ]
        }),
        account: new wallet.Account(value),
      };

      rpc.Query.invokeScript(cnf.script).execute('http://neo-privnet:30333').then(res => {
        const claims = Neon.u.hexstring2str(res.result.stack[0].value).split("{").join("").split("}").join("").split(",").join().split('"').join("").split(",");
        this.setState({
          ...this.state,
          loading: false,
          claims
        })
      })
    } catch(err) {
      console.log(err)
    }
  }

  render() {

    if (this.state.loading) return (
      <div className="login forced">
        <div id="loading"></div>
      </div>
    )

    if (this.state.claims.length === 0) {
    return (
      <div className='login'>
        <h1 className='heading'>
          Welcome to the SWISS ICO
        </h1>
        <form onSubmit={this.tryLogin}>
          <div className='wrapper'>
            <label>
              <input className='input' type="text" value={this.state.inputValue} onChange={this.handleChange} required/>
              <span className='placeholder'>Insert Your Key</span>
            </label>
          </div>
          <button className='button' type="submit">Login</button>
        </form>
      </div>
    );
    }

    if (this.state.claims.length !== 0) {
      return (<Claims claimsOptions={this.state.claims}/>)
    }
  }
}

export default Login;
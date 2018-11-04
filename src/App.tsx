import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login';
import './App.sss';

class App extends Component<{},{}> {
  render() {
    return (
      <>
        <Header />
        <main>
          <Login />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

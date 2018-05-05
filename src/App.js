import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
		<div className="container">
    		<div className="square">
			  <span className="l1"></span>
			  <span className="l2"></span>
			  <span className="l3"></span>
			  <span className="l4"></span>
			</div>
      		<div className="header">
        		Eateroo
      		</div>
  		</div>
    );
  }
}

export default App;

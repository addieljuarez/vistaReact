import React from 'react';
import logo from './logo.svg';
import './App.css';

import App2 from './App2';





export default class App extends React.Component {

  clickBoton(){
    alert('test');
  } 

  render(){

    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <App2 />
          <button onClick={this.clickBoton.bind(this)}>click</button>
          
        </header>
      </div>
    );
  }
  
}






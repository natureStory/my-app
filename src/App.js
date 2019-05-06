import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import H from './tools.js';
import S from './tools.js';
console.log(H);
console.log(S);

class App extends Component {
  // getData = () => {
  //   return fetch('http://www.baidu.com')
  // }
  getD = async () => {
    var result = await fetch('http://www.baidu.com')
    console.log(result, 123);
    return 1;
  }
  componentDidMount() {
    console.log(this.getD().then(result => {console.log(result)}).catch((e) => {console.log(e);}));
    console.log(1233);
  }
  render() {
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
        </header>
      </div>
    );
  }
}

export default App;

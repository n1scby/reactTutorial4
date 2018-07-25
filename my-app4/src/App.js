import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './dottedBox.css';
import styles from './dashedBox.css';


const divStyle = {
  margin: '40px',
  border: '5px solid gray'
};

const pStyle = {
  fonstSize: '15px',
  textAlign: 'center'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DottedBox />
        <Box />
        <DashedBox />
      </div>
    );
  }
}

const DottedBox = () => (
  <div className="dottedBox">
  <p className="dottedBox-content">CSS Styling!</p>
  </div>
);


const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Inline Styling!</p>
    </div>
);

const DashedBox = () => (
  <div className={styles.container}>
   <p className={styles.content}>CSS Modules Style!</p>
  </div>
);

export default App;

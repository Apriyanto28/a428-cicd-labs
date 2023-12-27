import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome My First Page Apriyanto Halim</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Ini merupakan tampilan utama dari website yang akan kalian lihat pada web ini</p>
        <p>Tujuan dari website ini hanya untuk sebatas pembelajaran dan pemahaman pengujian</p>
        <p>menggunakan blueocean.</p>
        <p>Bagian yang diatas ditambahkan ke dalam tampilan utama. ^^^</p>
      </div>
    );
  }
}

export default App;

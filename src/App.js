import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css'
import data from './data.json';

class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <Main
      data={data}
      />
      <Footer/>
      </>
    );
  }
}

export default App;
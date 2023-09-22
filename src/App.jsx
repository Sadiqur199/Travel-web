import React from 'react';
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default App;
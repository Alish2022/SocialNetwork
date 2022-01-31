import React from 'react';
import './App.css';
import Header from './Header/Header'
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";

const App= ()=> {
  return (
    <div className={"app"}>
      <Header/>
      <Nav/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;

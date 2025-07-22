// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Taste from './Components/Taste';
import Banner from './Components/Banner';
import Recipes from './Components/Recipes';



const App = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Taste />
        <Recipes />
    </div>
  )
}

export default App

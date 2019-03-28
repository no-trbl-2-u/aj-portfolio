import React from 'react';
import LandingPage from '../Pages/LandingPage'
import AboutPage from '../Pages/AboutPage'
import PortfolioPage from '../Pages/PortfolioPage'
import { Router } from '@reach/router'
import './App.css'

function App () {
  return (
    <section className="App-Container">
      <Router>
        <LandingPage path="/" />
        <AboutPage path="about" />
        <PortfolioPage path="portfolio/:artSetID"/>
      </Router>
    </section>
  )
}
export default App;

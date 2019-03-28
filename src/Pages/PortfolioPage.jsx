import React from 'react'
import TopNavbar from '../Components/TopNavbar';

function PortfolioPage (props) {
  return (
    <section>
      <TopNavbar />
      <h1>Porfolio Page</h1>
      <h2>You are at { props.artSetID }</h2>
    </section>
  )
}

export default PortfolioPage
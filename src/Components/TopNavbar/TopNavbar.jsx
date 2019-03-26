import React from 'react'

function TopNavbar(props) {
  return (
    <section>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Icon</a>
        <a className="navbar-item" href="google.com">Portfolio</a>
        <a className="navbar-item" href="about.com">About</a>
      </nav>
    </section>
  )
}

export default TopNavbar
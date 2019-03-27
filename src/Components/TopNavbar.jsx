import React from 'react'

import { Dropdown } from 'react-bootstrap'

const TopNavbarStyle = {
  height: "70px",
}

const IconContainerStyle = {
  borderRight: "2px solid black",
  paddingRight: "40px",
  paddingLeft: "30px"
}

function TopNavbar(props) {
  return (
    <section>
      <nav className="navbar navbar-dark bg-dark" style={ TopNavbarStyle }>
        <a className="navbar-brand" href="/" style={ IconContainerStyle }>Icon</a>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Portfolio
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Summer Exhibition 2016</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Winter Exhibition 2017</Dropdown.Item>
            <Dropdown.Item href="#/action-3">School Gallery 2018</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Graduation Gallery 2019</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <a className="navbar-item" href="https://www.google.com">About</a>
      </nav>
    </section>
  )
}

export default TopNavbar
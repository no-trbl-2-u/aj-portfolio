import React from 'react'
import { Nav, Dropdown } from 'react-bootstrap'

const TopNavbarStyle = {
  height: "70px",
  justifyContent: "center",
  marginTop: "20px",
  background: ""
}

function TopNavbar () {
  return (
    <Nav variant="pills" defaultActiveKey="/" style={ TopNavbarStyle }>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-1">About</Nav.Link>
      </Nav.Item>

      <Dropdown>
        <Dropdown.Toggle variant="link" id="dropdown-basic">
          Portfolio
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Summer Exhibition 2016</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Winter Exhibition 2017</Dropdown.Item>
          <Dropdown.Item href="#/action-3">School Gallery 2018</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Graduation Gallery 2019</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}

export default TopNavbar
import React, { useState } from 'react'
import { Nav, Dropdown } from 'react-bootstrap'
import { Link } from '@reach/router'

const TopNavbarStyle = {
  height: "70px",
  justifyContent: "center",
  paddingTop: "20px",
  backgroundColor: "#FFF",
  color: "red"
}

function TopNavbar () {

  const [activeTab, setActiveTab] = useState("")

  const selectTab = e => {
    console.log(e.target)
  }

  return (
    <Nav 
      variant="pills"
      defaultActiveKey="/"
      className="link-control"
      style={ TopNavbarStyle }
      onClick={ selectTab }
    >
      <Nav.Item>
        <Nav.Link as={ Link } to="/">Home</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={ Link } to="/about">About</Nav.Link>
      </Nav.Item>

      <Dropdown>
        <Dropdown.Toggle variant="link" id="dropdown-basic">
          Portfolio
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item 
            as={ Link } 
            to="/portfolio/SummerExhibition2016">Summer Exhibition 2016
          </Dropdown.Item>
          
          <Dropdown.Item 
            as={ Link } 
            to="/portfolio/WinterExhibition2017">Winter Exhibition 2017
          </Dropdown.Item>

          <Dropdown.Item 
            as={ Link } 
            to="/portfolio/SchoolGallery2018">School Gallery 2018
          </Dropdown.Item>

          <Dropdown.Item 
            as={ Link } 
            to="/portfolio/GraduationGallery2019">Graduation Gallery 2019
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}

export default TopNavbar
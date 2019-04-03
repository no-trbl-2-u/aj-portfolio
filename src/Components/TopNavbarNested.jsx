import React, { useState, useEffect } from 'react'
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
    setActiveTab(e.target.dataset.id)
  }

  useEffect(() => console.log(activeTab), [activeTab])

  return (
    <Nav 
      variant="pills"
      defaultActiveKey="/"
      className="link-control"
      style={ TopNavbarStyle }
      onClick={ selectTab }
    >
      <Nav.Item>
        <Nav.Link as={ Link } to="/" data-id="home">Home</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={ Link } to="/about" data-id="about">About</Nav.Link>
      </Nav.Item>

      <Dropdown>
        <Dropdown.Toggle variant="link" id="dropdown-basic">
          Portfolio
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item 
            as={ Link } 
            to="/portfolio/OilPainting">Oil Paintings
          </Dropdown.Item>
          
          <Dropdown.Item 
            as={ Link } 
            to="/portfolio/Graphite">Graphite Drawings
          </Dropdown.Item>

          <Dropdown.Item 
            as={ Link } 
            to="/portfolio/Charcoal">Charcoal
          </Dropdown.Item>

          <Dropdown.Item 
            as={ Link } 
            to="/portfolio/WatcerColor">Water Color
          </Dropdown.Item>

          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              Inner
            </Dropdown.Toggle>
            
            <Dropdown.Menu>

              <Dropdown.Item 
                as={ Link } 
                to="/portfolio/WatcerColor">Water Color
              </Dropdown.Item>
              
              <Dropdown.Item 
                as={ Link } 
                to="/portfolio/WatcerColor">Water Color
              </Dropdown.Item>

              <Dropdown.Item 
                as={ Link } 
                to="/portfolio/WatcerColor">Water Color
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
          
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  )
}

export default TopNavbar
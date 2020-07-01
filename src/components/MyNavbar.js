import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

export default function MyNavbar() {
  return (
      <div className="border-bottom">
          <Navbar className="py-3 container" expand="lg">
              <Navbar.Brand href="" className="font-weight-bold">Frappe Books</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="ml-auto">
                  <Nav.Link href="" className=" mr-4 my-nav-link">Docs</Nav.Link>
                  <Nav.Link href="" className=" mr-4 my-nav-link">Github</Nav.Link>
                  <Nav.Link href="" className=" mr-4 my-nav-link">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
      </div>
  )
}



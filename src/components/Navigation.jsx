import React, { Component } from 'react';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Navigation extends Component {
render() {
  return (
    <MDBNavbar color="blue" dark expand="md">
    <MDBNavbarBrand>
      <strong className="white-text">Therapy Site</strong>
    </MDBNavbarBrand>
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBNavLink to="/">Home</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/about">About</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/contact">Contact</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
        <MDBNavItem>
        </MDBNavItem>
      </MDBNavbarNav>
  </MDBNavbar>
    );
  }
}

export default Navigation;
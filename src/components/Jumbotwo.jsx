import React, { Component } from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Positive from '../images/positive-thoughts-therapy-site.jpg';

class Jumbotwo extends Component {
render() {
  return (
    <MDBContainer className="mt-5 text-center">
    <MDBRow>
      <MDBCol>
        <MDBJumbotron className="p-0">
          <img src={Positive} alt="Be yourself!"/>
        </MDBJumbotron>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
    );
  }
}

export default Jumbotwo;
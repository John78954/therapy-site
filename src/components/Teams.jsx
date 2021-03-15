import React, { Component } from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import John from '../images/john-pena.jpg';
import Erik from '../images/erik-fernandez-therapist.jpg';
import Godzilla from '../images/baby-godzilla.jpg';
import '../assets/Teams.css'

class Teams extends Component {
    render() {
        return (
            <div className="Teams">
                <MDBCard className="my-5 px-1 pb-5 text-center">
                    <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Our amazing team
                    </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                    <MDBRow>
                        <MDBCol md="4" className="mb-md-0 mb-5">
                        <img id="erik" src={Erik} alt="erik-therapists"></img>
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Erik Fernandez
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">Therapist</h6>
                        <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                            <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-dribbble"
                        >
                            <MDBIcon fab icon="dribbble" />
                        </MDBBtn>
                        <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                            <MDBIcon fab icon="twitter" />
                        </MDBBtn>
                        </MDBCol>

                        <MDBCol md="4" className="mb-md-0 mb-5">
                        <img src={John} alt="therapists"></img>
                        <h4 className="font-weight-bold dark-grey-text my-4">John Pena</h4>
                        <h6 className="text-uppercase grey-text mb-3">
                            Front-end Developer
                        </h6>
                        <MDBBtn
                            tag="a"
                            floating
                            size="sm"
                            className="mx-1 mb-0 btn-email"
                        >
                            <MDBIcon icon="envelope" />
                        </MDBBtn>
                        <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
                            <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>
                        <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
                            <MDBIcon fab icon="github" />
                        </MDBBtn>
                        </MDBCol>

                        <MDBCol md="4" className="mb-md-0 mb-5">
                        <img id="godzilla" src={Godzilla} alt="therapists"></img>
                        <h4 className="font-weight-bold dark-grey-text my-4">
                            Baby Godzilla
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">King of the Monsters Jr.</h6>
                        <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
                            <MDBIcon fab icon="linkedin-in" />
                        </MDBBtn>
                        <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
                            <MDBIcon fab icon="twitter" />
                        </MDBBtn>
                        <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-pin">
                            <MDBIcon fab icon="pinterest" />
                        </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default Teams;
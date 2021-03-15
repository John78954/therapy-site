import React, { Component } from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle } from "mdbreact";
import Problems from '../images/counseling-problems-therapy-site.png';
import '../assets/Jumbotron.css';


class Jumbotron extends Component {
    render() {
        return (
            <div className="Jumbotron">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                        <MDBJumbotron style={{ padding: 0 }}>
                            <img id="problems" src={Problems} alt="Problems in Therapy"></img>
                            <MDBCol className="py-5">
                                <MDBCardTitle id="jumbo-title" className="h1-responsive pt-3 m-5 font-bold">Therapy Site</MDBCardTitle>
                                <p id="jumbo-text" className="mx-5 mb-5">Get the help you need today!
                                </p>
                                <MDBBtn id="jumbo-button" outline color="black" className="mb-5" href="/about">View Therapists</MDBBtn>
                            </MDBCol>
                        </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default Jumbotron;
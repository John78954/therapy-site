import React, { Component } from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardText, MDBCardBody } from "mdbreact";
import Depression from '../images/counseling-depression-therapy-site.png';
import Flowers from '../images/flowers-therapy-site.jpg';
import Medication from '../images/medication-therapy-site.jpg';

class Cards extends Component {
    render() {
        return (
            <div className="Cards">
                <MDBCardGroup>
                    <MDBCard>
                    <img src={Flowers} alt="Therapy"></img>
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Get Help</MDBCardTitle>
                        <MDBCardText>
                            Don't worry, be happy!
                        </MDBCardText>
                        <MDBBtn color="primary" size="md">
                            read more
                        </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                    <img src={Depression} alt="Therapy"></img>
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Feel Depressed?</MDBCardTitle>
                        <MDBCardText>
                            Call a therapist today!
                        </MDBCardText>
                        <MDBBtn color="primary" size="md">
                            read more
                        </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <img src={Medication} alt="Therapy"></img>
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Therapy Medication</MDBCardTitle>
                        <MDBCardText>
                            Ask about our medication and how it can help you.
                        </MDBCardText>
                        <MDBBtn color="primary" size="md">
                            read more
                        </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>
            </div>
        );
    }
}

export default Cards;
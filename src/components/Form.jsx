import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import '../assets/Form.css';

class Form extends Component {
    render() {
        return (
            <div className="Form">
                <section className="contact-section my-5">
                    <MDBCard>
                        <MDBRow>
                        <MDBCol lg="8">
                            <MDBCardBody className="form">
                            <h3 className="mt-4">
                                <MDBIcon icon="envelope" className="pr-2" />
                                Make an appointment:
                            </h3>
                            <MDBRow>
                                <MDBCol md="6">
                                <div className="md-form mb-0">
                                    <MDBInput
                                    type="text"
                                    id="form-contact-name"
                                    label="Your name"
                                    />
                                </div>
                                </MDBCol>
                                <MDBCol md="6">
                                <div className="md-form mb-0">
                                    <MDBInput
                                    type="text"
                                    id="form-contact-email"
                                    label="Your email"
                                    />
                                </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="6">
                                <div className="md-form mb-0">
                                    <MDBInput
                                    type="text"
                                    id="form-contact-phone"
                                    label="Your phone"
                                    />
                                </div>
                                </MDBCol>
                                <MDBCol md="6">
                                <div className="md-form mb-0">
                                    <MDBInput
                                    type="text"
                                    id="form-contact-company"
                                    label="Reason for visit"
                                    />
                                </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12">
                                <div className="md-form mb-0">
                                    <MDBInput
                                    type="textarea"
                                    id="form-contact-message"
                                    label="Comments"
                                    />
                                    <MDBBtn rounded color="blue">
                                    <MDBIcon icon="paper-plane" />
                                    </MDBBtn>
                                </div>
                                </MDBCol>
                            </MDBRow>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol lg="4">
                            <MDBCardBody className="contact text-center h-100 white-text">
                            <h3 className="my-4 pb-2">Contact information</h3>
                            <ul className="text-lg-left list-unstyled ml-4">
                                <li>
                                <p>
                                    <MDBIcon icon="map-marker-alt" className="pr-2" />
                                    Miami, Florida
                                </p>
                                </li>
                                <li>
                                <p>
                                    <MDBIcon icon="phone" className="pr-2" />(305) 301-5435
                                </p>
                                </li>
                                <li>
                                <p>
                                    <MDBIcon icon="envelope" className="pr-2" />
                                    jroger.pena@gmail.com
                                </p>
                                </li>
                            </ul>
                            <hr className="hr-light my-4" />
                            <ul className="list-inline text-center list-unstyled">
                                <li className="list-inline-item">
                                <a href="#!" className="p-2 fa-lg w-ic">
                                    <MDBIcon fab icon="twitter" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#!" className="p-2 fa-lg w-ic">
                                    <MDBIcon fab icon="linkedin-in" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a href="#!" className="p-2 fa-lg w-ic">
                                    <MDBIcon fab icon="instagram" />
                                </a>
                                </li>
                            </ul>
                            </MDBCardBody>
                        </MDBCol>
                        </MDBRow>
                        <div id="map-container" className="rounded z-depth-1-half map-container" style={{ height: "400px" }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494" title="This is a unique title" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} />
                        </div>
                    </MDBCard>
                </section>
            </div>
        );
    }
}

export default Form;
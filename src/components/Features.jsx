import React, { Component } from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import '../assets/Features.css';

class Features extends Component {
    render() {
        return (
            <div className="Features">
                <section className="my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        What is our goal?
                    </h2>
                    <p className="lead black-text w-responsive text-center mx-auto mb-5">
                        Be yourself!
                    </p>

                    <MDBRow>
                        <MDBCol md="4" className="md-0 mb-5">
                        <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="heart" size="2x" className="blue-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Love</h4>
                            <p className="black-text">
                            The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
                            </p>
                            <MDBBtn color="primary" size="sm">
                                Learn more
                            </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        </MDBCol>
                        <MDBCol md="4" className="md-0 mb-5">
                        <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="capsules" size="2x" className="pink-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Medication</h4>
                            <p className="black-text">
                            The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
                            </p>
                            <MDBBtn color="pink" size="sm">
                                Learn more
                            </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        </MDBCol>
                        <MDBCol md="4" className="md-0 mb-5">
                        <MDBRow>
                            <MDBCol lg="2" md="3" size="2">
                            <MDBIcon icon="dog" size="2x" className="purple-text" />
                            </MDBCol>
                            <MDBCol lg="10" md="9" size="10">
                            <h4 className="font-weight-bold">Therapy animals</h4>
                            <p className="black-text">
                            The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
                            </p>
                            <MDBBtn color="purple" size="sm">
                                Learn more
                            </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </section>
            </div>
        );
    }
}

export default Features;
import React, { Component } from "react";
import Navigation from '../components/Navigation.jsx';
import Jumbotwo from '../components/Jumbotwo.jsx';
import Teams from '../components/Teams.jsx';
import Footer from '../components/Footer.jsx';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Navigation/>
                <Jumbotwo/>
                <Teams/>
                <Footer/>
            </div>
        );
    }
}

export default About;
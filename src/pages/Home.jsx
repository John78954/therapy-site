import React, { Component } from "react";
import Navigation from '../components/Navigation.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';
import Features from '../components/Features.jsx';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Navigation/>
                <Jumbotron/>
                <Cards/>
                <Features/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
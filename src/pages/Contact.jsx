import React, { Component } from "react";
import Navigation from '../components/Navigation.jsx';
import Tables from '../components/Tables.jsx';
import Form from '../components/Form.jsx';
import Footer from '../components/Footer.jsx';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <Navigation/>
                <Tables/>
                <Form/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;
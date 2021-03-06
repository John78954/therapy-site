import React, { Component } from "react";
import { MDBContainer, MDBFooter } from "mdbreact";


class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <MDBFooter color="blue" className="font-small pt-4 mt-4">
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.techproart.com"> Techproart.com </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        );
    }
}

export default Footer;
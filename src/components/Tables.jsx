import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBJumbotron } from 'mdbreact';
import Office from '../images/counselars-office-therapy-site.jpg';
import '../assets/Tables.css';

class Tables extends Component {
    render() {
        const numbers = ['1', '2', '3']
        const names = ['Mark', 'John', 'Erik'];
        const doas = ['07/12/2021', '07/15/2021', '07/16/2021'];
        const dobs = ['04/29/1995', '04/25/1999', '07/23/1995'];
        
        const listNumbers = numbers.map((number) =>
        <div key={number.toString()}>{number}</div>
        );
        const listPeoples = names.map((name) =>
        <div key={name.toString()}>{name}</div>
        );
        const listDoas = doas.map((doa) => 
        <div key={doa.toString()}>{doa}</div>
        );
        const listDobs = dobs.map((dob) => 
        <div key={dob.toString()}>{dob}</div>
        );
        return (
            <div className="Tables">
                <MDBJumbotron className="p-0">
                <img id="Office" src={Office} alt="offices"></img>
                </MDBJumbotron>
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date of Appointment</th>
                        <th>DOB</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        <td>{listNumbers}</td>
                        <td>{listPeoples}</td>
                        <td>{listDoas}</td>
                        <td>{listDobs}</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        );
    }
}

export default Tables;
import React from 'react';
import firebase from "firebase";
import { Link } from "react-router-dom";
import {Form, Button, FormControl} from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";

function Navbar() {
    return (
        <ReactBootStrap.Navbar bg="white" expand="lg">
            <Link to="/"><ReactBootStrap.Navbar.Brand href="#home">LOGO</ReactBootStrap.Navbar.Brand></Link>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.Nav.Link className="pt3" href="#home">Home</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link className="pt3" href="#home">About Us</ReactBootStrap.Nav.Link>
                <Link to="/contact"><ReactBootStrap.Nav.Link className="pt3" href="#link">Contact Us</ReactBootStrap.Nav.Link></Link>
                <Form inline className='pl6'>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav className="mr-auto pl7 fr-m pl7">
                <ReactBootStrap.Nav.Link href="#home" onClick={() => firebase.auth().signOut()}>Sign Out</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    )
}

export default Navbar

import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return(
        <div className="bck_black">
        <div className="contact_wrapper">
            <div className="contact_title">CONTACT US</div>
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
        </div>
        </div> 
    );
}

export default Contact;
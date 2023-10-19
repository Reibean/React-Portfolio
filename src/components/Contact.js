import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showAlert, setShowAlert] =useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            console.log("Form data submitted:", formData);
            setShowAlert(true);
        }
    };

    return (
        <Container className="mt-5">
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissable>
                    Message has been sent!
                </Alert>
            )}
            <h2>Contact Me!</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="name" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Contact;
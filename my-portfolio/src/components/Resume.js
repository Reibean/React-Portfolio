import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ResumePage = () => {
    return (
        <Container className="mt5">
            <Row>
                <Col md={6} className="resume d-flex flex-column align-items-center justify-content-center">
                    <h2>Resume</h2>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">Check it out!</Button>
                        </a> 
                </Col>
                <Col md={6} className="cover-letter d-flex flex-column align-items-center justify-content-center">
                    <h3>Cover letter</h3>
                    <a href="/cover_letter.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">Check it out!</Button>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default ResumePage;
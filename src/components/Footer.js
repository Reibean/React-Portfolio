import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} className="text-center">
                        <a href="https://github.com/Reibean" target="_blank" rel="noopener noreferrer" className="text-white">
                            <FaGithub size={32} />
                        </a>
                    </Col>
                    <Col xs={12} md={6} className="text-center">
                        <a href="https://www.linkedin.com/in/reiley-burnitt-05b4911b3/" target="_blank" rel="noopener noreferrer" className="text-white">
                            <FaLinkedin size={32} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Image src="/picture.jpg" alt="picture of me" className="profile-image" fluid />
                </Col>
                <Col md={8}>
                    <h2>About Me</h2>
                    <p>

                    </p>
                    <p>

                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
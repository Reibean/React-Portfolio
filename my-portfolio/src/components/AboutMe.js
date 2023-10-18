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
                        My name is Reiley Burnitt and I have been coding for a little over 6 months now. I am certified in full stack web development and eager to get into the real world side of things. I just finished up with my certification with the University of Utah and am very excited to put my skills to use for whatever lucky company. I am very driven and excited to share my knowledge but also to gain knowledge from others.

                    </p>
                    <p>
                        Thank you for your time!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
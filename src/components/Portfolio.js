import React from 'react';
import { Container, Row, Card, Col, Button } from 'react-bootstrap';

const Portfolio = () => {
    const projects = [
        {
            title: "Weather App",
            description: "My first project implemimenting a 3rd party API to handle gathering and posting data to display a 5 day weather forecast for a given city.",
            imageUrl: "/images/Weather App.png",
            liveUrl: "https://reibean.github.io/WeatherApp/",
            githubUrl: "https://github.com/Reibean/WeatherApp"
        },
        {
            title: "Timed Quiz",
            description: "One of my very first projects. Learned how to work javascript to have a timer and modify that timer when an incorrect answer is applied.",
            imageUrl: "/images/Quiz.png",
            liveUrl: "https://reibean.github.io/Timed-Quiz/",
            githubUrl: "https://github.com/Reibean/Timed-Quiz"
        },
        {
            title: "Planner",
            description: "The Planner app is a multifunctional application that allows the user to slot in specific 'To-Do's' so that they can keep track of the tasks they need to complete for that given day.",
            imageUrl: "/images/Notes.png",
            liveUrl: "https://reibean.github.io/Planner/",
            githubUrl: "https://github.com/Reibean/Planner"
        },
    ];

    return (
        <Container className="mt-5">
            <h2>My Portfolio</h2>
            <Row>
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={project.imageUrl} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Button variant="primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    Live project
                                </Button>
                                &nbsp;
                                <Button variant="secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
        ))}
            </Row>
        </Container>
    );
}

export default Portfolio;
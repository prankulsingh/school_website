import React from "react";
import { Col, Container, Row, Card, CardBody, CardTitle, CardSubtitle, Jumbotron } from "reactstrap";

function Vision() {
    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                        <h2>Vision</h2>
                        <div className="image-container">
                            <img src={require("assets/img/bg3.jpg")} alt={"Nature, United States"} />
                        </div>
                        <p>
                            I will be the leader of a company that ends up being
                            worth billions of dollars, because I got the answers. I
                            understand culture. I am the nucleus. I think that’s a
                            responsibility that I have, to push possibilities, to show
                            people, this is the level that things could be at.
                            I will be the leader of a company that ends up being
                            worth billions of dollars, because I got the answers. I
                            understand culture. I am the nucleus. I think that’s a
                            responsibility that I have, to push possibilities, to show
                            people, this is the level that things could be at.
                            I will be the leader of a company that ends up being
                            worth billions of dollars, because I got the answers. I
                            understand culture. I am the nucleus. I think that’s a
                            responsibility that I have, to push possibilities, to show
                            people, this is the level that things could be at.
                        </p>
                        <h2>Mission</h2>
                        <Row>
                            <Col>
                                <Card className="mission-container">
                                    <h4 className="mission-title">Sports</h4>
                                    <h6 className="mission-subtitle">Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.</h6>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mission-container">
                                    <h4 className="mission-title">World Class Education</h4>
                                    <h6 className="mission-subtitle">Provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning.</h6>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="mission-container">
                                    <h4 className="mission-title">Sports</h4>
                                    <h6 className="mission-subtitle">Provide a safe learning environment with a welcoming atmosphere which creates a sense of belonging amongst the families.</h6>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mission-container">
                                    <h4 className="mission-title">Sports</h4>
                                    <h6 className="mission-subtitle">Provide exceptional care to children while fostering each child’s intellectual, social, physical and moral development in an academic-rich environment.</h6>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Vision;

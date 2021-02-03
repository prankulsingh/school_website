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
                            <img src={require("assets/img/vision.png")} alt={"School Vision"} />
                        </div>
                        <p>
                            We want to develop well rounded, confident and responsible individuals who aspire to achieve their full potential. We will 
                            do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all achievements 
                            are celebrated. We believe that a happy child is a successful one. We are committed to providing a positive, safe and stimulating environment 
                            for children to learn, where all are valued. We intend that all children should enjoy their learning, achieve their potential and become 
                            independent life-long learners.
                        </p>
                        <p>
                            We believe that education should take place in a fully inclusive environment with equal opportunities for all and that all children should learn 
                            to value religious and cultural differences. Our school strives to be at the centre of the local community with positive and effective links to the wider 
                            and global communities. We aim to develop well-rounded and thoughtful students prepared to cope with a changing post-modern and globalized world. Each 
                            child should develop a curiosity of learning, discover their interests and grow in their love of learning. 
                            We also desire to have strong families through parent support/fellowship and skills training.
                        </p>
                        <ul>
                            <li>Fun & Safe Environment</li>
                            <li>Qualified, dedicated & inspiring faculty</li>
                            <li>Ideal Student - Teacher ratio</li>
                            <li>Activity based integrated Curriculum</li>
                        </ul>
                        <h2>Mission</h2>
                        <Row>
                            <Col>
                                <Card className="mission-container">
                                    {/* <h4 className="mission-title">Sports</h4> */}
                                    <h6 className="mission-subtitle">Offer a safe, happy place where everyone is known and valued, and where differing needs are acknowledged, accepted and met.</h6>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mission-container">
                                    {/* <h4 className="mission-title">World Class Education</h4> */}
                                    <h6 className="mission-subtitle">Provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning.</h6>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="mission-container">
                                    {/* <h4 className="mission-title">Sports</h4> */}
                                    <h6 className="mission-subtitle">Provide a safe learning environment with a welcoming atmosphere which creates a sense of belonging amongst the families.</h6>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="mission-container">
                                    {/* <h4 className="mission-title">Sports</h4> */}
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

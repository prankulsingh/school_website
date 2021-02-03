import React from "react";
import { Col, Container, Row, Card, CardBody, CardTitle, CardSubtitle, Jumbotron } from "reactstrap";
import * as Constants from "../../constants/Constants";

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
                            <li>Bring out the talents and skills of the students through academic's co- curricular activities</li>
                            <li>Develop the qualities of self discipline and self respect.</li>
                            <li>Leadership qualities develop or instill.</li>
                            <li>Create responsible individuals with emotional bondages.</li>
                            <li>Prepare them to face challenge of life with confidence and strength.</li>
                            <li>Create good human beings with compassion, love and care for others.</li>
                            <li>Develop the overall personality.</li>
                        </ul>
                        <h2>Mission</h2>
                        <Row>
                            {
                                Constants.appStrings.aboutUs.missionStatements.map((mission, key) =>
                                    <Col md="6" xl="6">
                                        <Card className="mission-container shadow-sm">
                                            <h4 className="mission-title">{mission.title}</h4>
                                            {mission.text}
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Vision;

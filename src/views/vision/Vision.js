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
                            <img src={Constants.visionData.visionPhoto} alt={Constants.appStrings.schoolName} />
                        </div>
                        { Constants.visionData.statements.map((statement, key) => <p key={key}>{statement}</p>) }
                        <ul>
                            { Constants.visionData.visionPointers.map((pointer, key) => <li key={key}>{pointer}</li>) }
                        </ul>
                        <br/>
                        <h2>Mission</h2>
                        { Constants.missionData.statements.map((mission, key) => <p key={key}>{mission}</p>)}
                        {/*<Row>*/}
                        {/*    {*/}
                        {/*        Constants.missionData.cards.map((mission, key) =>*/}
                        {/*            <Col md="6" xl="6" key={key}>*/}
                        {/*                <Card className="mission-container shadow-sm">*/}
                        {/*                    <h4 className="mission-title">{mission.title}</h4>*/}
                        {/*                    {mission.text}*/}
                        {/*                </Card>*/}
                        {/*            </Col>*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*</Row>*/}
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Vision;

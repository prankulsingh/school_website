import React from "react";
import { Col, Container, Row } from "reactstrap";
import * as Constants from "../../constants/Constants";
import './ManagedBy.scss'

function ManagedBy() {
    return (
        <div className="wrapper">
            <div className="base-page section contact-us-page">
                <Container>
                    <h2>Managed By</h2>
                        <div className="section section-team text-center">
                        <Container>
                            <div className="team">
                                <Row>
                                    {
                                        Constants.trustees.map((trustee, key) =>
                                            <Col md="4" className="bottom-margin" key={key}>
                                                <div className="team-player">
                                                    {
                                                        trustee.photo &&
                                                        <img
                                                            className="rounded-circle img-fluid img-raised"
                                                            src={trustee.photo}
                                                        />
                                                    }
                                                    <h4 className="title">{trustee.name}</h4>
                                                    {
                                                        trustee.designation &&
                                                        <p className="category text-info">{trustee.designation}</p>
                                                    }
                                                    {
                                                        trustee.description &&
                                                        <p className="description">
                                                            {trustee.description}
                                                        </p>
                                                    }
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </div>
                        </Container>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default ManagedBy;

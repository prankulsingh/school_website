import React from "react";
import { Col, Container, Row } from "reactstrap";
import * as Constants from "../../constants/Constants";

function ManagedBy() {
    return (
        <div className="base-page section contact-us-page">
            <Container>
                <h2>Managed By</h2>
                    <div className="section section-team text-center">
                    <Container>
                        <div className="team">
                            <Row>
                                <Col md="4">
                                <div className="team-player">
                                    <img
                                    alt="..."
                                    className="rounded-circle img-fluid img-raised"
                                    src={require("assets/img/avatar.jpg")}
                                    />
                                    <h4 className="title">Romina Hadid</h4>
                                    <p className="category text-info">Model</p>
                                    <p className="description">
                                    You can write here details about one of your team members.
                                    You can give more details about what they do. Feel free to
                                    add some{" "}
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        links
                                    </a>{" "}
                                    for people to be able to follow them outside the site.
                                    </p>
                                </div>
                                </Col>
                                <Col md="4">
                                <div className="team-player">
                                    <img
                                    alt="..."
                                    className="rounded-circle img-fluid img-raised"
                                    src={require("assets/img/ryan.jpg")}
                                    />
                                    <h4 className="title">Ryan Tompson</h4>
                                    <p className="category text-info">Designer</p>
                                    <p className="description">
                                    You can write here details about one of your team members.
                                    You can give more details about what they do. Feel free to
                                    add some{" "}
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        links
                                    </a>{" "}
                                    for people to be able to follow them outside the site.
                                    </p>
                                </div>
                                </Col>
                                <Col md="4">
                                <div className="team-player">
                                    <img
                                    alt="..."
                                    className="rounded-circle img-fluid img-raised"
                                    src={require("assets/img/eva.jpg")}
                                    />
                                    <h4 className="title">Eva Jenner</h4>
                                    <p className="category text-info">Fashion</p>
                                    <p className="description">
                                    You can write here details about one of your team members.
                                    You can give more details about what they do. Feel free to
                                    add some{" "}
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        links
                                    </a>{" "}
                                    for people to be able to follow them outside the site.
                                    </p>
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="3">
                                <div className="team-player">
                                    <img
                                    alt="..."
                                    className="rounded-circle img-fluid img-raised"
                                    src={require("assets/img/avatar.jpg")}
                                    />
                                    <h4 className="title">Romina Hadid</h4>
                                    <p className="category text-info">Model</p>
                                    <p className="description">
                                    You can write here details about one of your team members.
                                    You can give more details about what they do. Feel free to
                                    add some{" "}
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        links
                                    </a>{" "}
                                    for people to be able to follow them outside the site.
                                    </p>
                                </div>
                                </Col>
                                <Col md="3">
                                <div className="team-player">
                                    <img
                                    alt="..."
                                    className="rounded-circle img-fluid img-raised"
                                    src={require("assets/img/ryan.jpg")}
                                    />
                                    <h4 className="title">Ryan Tompson</h4>
                                    <p className="category text-info">Designer</p>
                                    <p className="description">
                                    You can write here details about one of your team members.
                                    You can give more details about what they do. Feel free to
                                    add some{" "}
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        links
                                    </a>{" "}
                                    for people to be able to follow them outside the site.
                                    </p>
                                </div>
                                </Col>
                                <Col md="3">
                                <div className="team-player">
                                    <img
                                    alt="..."
                                    className="rounded-circle img-fluid img-raised"
                                    src={require("assets/img/eva.jpg")}
                                    />
                                    <h4 className="title">Eva Jenner</h4>
                                    <p className="category text-info">Fashion</p>
                                    <p className="description">
                                    You can write here details about one of your team members.
                                    You can give more details about what they do. Feel free to
                                    add some{" "}
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        links
                                    </a>{" "}
                                    for people to be able to follow them outside the site.
                                    </p>
                                </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default ManagedBy;

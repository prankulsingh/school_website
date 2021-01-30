import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, Col, Container, Row } from "reactstrap";
import CardTitle from "reactstrap/lib/CardTitle";
import * as Constants from "../../constants/Constants";

function Facilities() {
    return (
        <>
            <div className="wrapper">
                <div className="base-page section contact-us-page">
                    <Container>
                        <h2>Facilities</h2>
                        <Card>
                            <Row>
                                <Col md="5">
                                <CardImg src={"https://cdn.pixabay.com/photo/2017/08/10/09/40/sport-2620596_1280.jpg"}/>
                                </Col>
                                <Col>
                                <CardBody>
                                    <CardTitle tag="h2">Sports</CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">
                                    Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                    observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                    Exposing children to scientific concepts from a young age encourages exploration and lays the ground work for a love of learning for many years to come. 
                                    </CardSubtitle>
                                </CardBody>
                                </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row>
                                <Col>
                                <CardBody>
                                    <CardTitle tag="h2">Labs</CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">
                                        Everyone loves food and teaching children how to create and appreciate their own culinary masterpieces is very rewarding! Quality and 
                                        healthy food should be an integral part of every person's life and children are no exception. Even the picky eaters have fun trying new things!
                                    </CardSubtitle>
                                </CardBody>
                                </Col>
                                <Col md="5">
                                <CardImg src={"https://cdn.pixabay.com/photo/2014/12/10/20/48/laboratory-563423_1280.jpg"}/>
                                </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row>
                                <Col md="5">
                                <CardImg src={"https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"}/>
                                </Col>
                                <Col>
                                <CardBody>
                                    <CardTitle tag="h2">Library</CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">
                                    Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                    observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                    </CardSubtitle>
                                </CardBody>
                                </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row>
                                <Col>
                                <CardBody>
                                    <CardTitle tag="h2">Science</CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">
                                    Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                    observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                    Exposing children to scientific concepts from a young age encourages exploration and lays the ground work for a love of learning for many years to come. 
                                    </CardSubtitle>
                                </CardBody>
                                </Col>
                                <Col md="4">
                                    <CardImg src={require("assets/img/ryan.jpg")}/>
                                </Col>
                            </Row>
                        </Card>
                        <Card>
                            <Row>
                                <Col md="4">
                                <CardImg src={require("assets/img/ryan.jpg")}/>
                                </Col>
                                <Col>
                                <CardBody>
                                    <CardTitle tag="h2">Science</CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">
                                    Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                    observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                    Exposing children to scientific concepts from a young age encourages exploration and lays the ground work for a love of learning for many years to come. 
                                    </CardSubtitle>
                                </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Facilities;

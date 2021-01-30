import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, Col, Container, Row } from "reactstrap";
import CardTitle from "reactstrap/lib/CardTitle";
import Carousel from "../../views/landingPage/childComponents/Carousel";
import * as Constants from "../../constants/Constants";
import { FacilitiesData } from "data";

function Facilities() {
    return (
        <>
            <div className="wrapper">
                <div className="base-page section contact-us-page">
                    <Container>
                        <h2>Facilities</h2>
                        <h2>Sports</h2>
                        <Row className="justify-content-between">
                            <Col md="6">
                                <p>
                                Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                </p>
                            </Col>
                            <Col md="6">
                                <p>
                                Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                </p>
                            </Col>
                        </Row>
                        <Row className="small-vertical-margin justify-content-center">
                            <Carousel data={FacilitiesData.sports.data}/>
                        </Row>
                        <h2>Labs</h2>
                        <Row className="justify-content-between">
                            <Col md="6">
                                <p>
                                Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                Exposing children to scientific concepts from a young age encourages exploration and lays the ground work for a love of learning for many years to come. 
                                </p>
                            </Col>
                            <Col md="6">
                                <p>
                                Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                Exposing children to scientific concepts from a young age encourages exploration and lays the ground work for a love of learning for many years to come. 
                                </p>
                            </Col>
                        </Row>
                        <Row className="small-vertical-margin justify-content-center">
                            <Carousel data={FacilitiesData.labs.data} />
                        </Row>
                        <h2>Labs</h2>
                        <Row className="justify-content-between">
                            <Col md="6">
                                <p>
                                Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                Exposing children to scientific concepts from a young age encourages exploration and lays the ground work for a love of learning for many years to come. 
                                </p>
                            </Col>
                            <Col md="6">
                                <p>
                                Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                Exposing children to scientific concepts from a young age encourages exploration and lays the ground work for a love of learning for many years to come. 
                                </p>
                            </Col>
                        </Row>
                        <Row className="small-vertical-margin justify-content-center">
                            <Col md="8">
                                <img src={"https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"}/>
                            </Col>
                        </Row>
                        <h2>Labs</h2>
                        <Row className="justify-content-between">
                            <Col md="6">
                                <p>
                                Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                Exposing children to scientific concepts from a young age encourages exploration and lays the ground work for a love of learning for many years to come. 
                                </p>
                            </Col>
                            <Col md="6">
                                <p>
                                Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity, 
                                observing a rain cloud forming or seeing ice melt. Learning about how our world works through science can be a fun and exciting experience. 
                                Exposing children to scientific concepts from a young age encourages exploration and lays the ground work for a love of learning for many years to come. 
                                </p>
                            </Col>
                        </Row>
                        <Row className="small-vertical-margin justify-content-center">
                            <Col md="8">
                                <img src={"https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"}/>
                            </Col>
                        </Row>
                    </Container>
                    
                </div>
            </div>
        </>
    );
}

export default Facilities;

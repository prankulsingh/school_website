import React from "react";
import { Col, Container, Row, Card, CardBody, CardTitle, CardSubtitle} from "reactstrap";

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
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h4">Sports</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                                Fix style of the card and it will be awesome.
                                            </CardSubtitle>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h4">Sports</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                                Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity. 
                                        </CardSubtitle>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardBody>
                                    <CardTitle tag="h4">Sports</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                                           Elements of science are all around us. In fact, we encounter the effects of science on a daily basis, whether it be experiencing static electricity. 
                                    </CardSubtitle>
                                    </CardBody>
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

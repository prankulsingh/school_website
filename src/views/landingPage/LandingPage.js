import React from "react";
// reactstrap components
import {Card, CardBody, CardSubtitle, CardTitle, Col, Container, Jumbotron, Row,} from "reactstrap";
// core components
import DarkFooter from "../../components/Footers/DarkFooter";
import './LandingPage.scss'
import * as Constants from "../../constants/Constants";
import NoticesWidget from "../../components/NoticesWidget/NoticesWidget";
import Carousel from "../../commonComponents/Carousel";

function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <div className="section section-about-us">
          <Container>
              <div className="page-header small-vertical-margin page-header-small">
                  <Carousel data={Constants.landingPageData.carouselData}/>
              </div>
            <Jumbotron className="shadow">
              <h2>{Constants.appStrings.principalsMessageLabel}</h2>
                <Col md="4" className="float-left">
                  <div className="image-container">
                      <img src={require("assets/img/ryan.jpg")} alt={"Nature, United States"} />
                  </div>
                </Col>
                { Constants.landingPageData.principalsMessageData.message.map((message, key) => <p key={key}>{message}</p>) }
                <br/>
                {
                    Constants.landingPageData.principalsMessageData.by &&
                    <h5>{` - ${Constants.landingPageData.principalsMessageData.by}`}</h5>
                }
            </Jumbotron>
            <div className="section-story-overview">
              <Row>
                  <Col md="6" xl="6">
                      <Card>
                          <CardBody>
                              <CardSubtitle tag="h6" className="mb-2 text-muted see-all">
                                  <a href={Constants.subdomains.notices} target="_blank">
                                      See all
                                  </a>
                              </CardSubtitle>
                              <CardTitle tag="h5">Important notices</CardTitle>
                              <NoticesWidget
                                  noOfNotices={5}
                                  showHomeRedirect={false}
                                  miniWidget={true}
                              />
                              <br/>
                          </CardBody>
                      </Card>
                  </Col>
                  <Col md="6" xl="6">
                      <Card>
                          <CardBody>
                              <CardSubtitle tag="h6" className="mb-2 text-muted see-all">
                                  <a href={Constants.subdomains.notices} target="_blank">
                                      See all
                                  </a>
                              </CardSubtitle>
                              <CardTitle tag="h5">News and announcements</CardTitle>
                              <NoticesWidget
                                  noOfNotices={5}
                                  showHomeRedirect={false}
                                  miniWidget={true}
                              />
                              <br/>
                          </CardBody>
                      </Card>
                  </Col>
              </Row>
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;

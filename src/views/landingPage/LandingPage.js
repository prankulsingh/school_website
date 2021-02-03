import React from "react";

// reactstrap components
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col, NavbarBrand, Collapse, Nav, NavItem, NavLink, Navbar, Jumbotron, Card, CardBody, CardTitle, CardSubtitle,
} from "reactstrap";

// core components
import MainNavbar from "views/landingPage/childComponents/MainNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import DarkFooter from "../../components/Footers/DarkFooter";
import './LandingPage.scss'
import * as Constants from "../../constants/Constants";
import NoticesWidget from "../../components/NoticesWidget/NoticesWidget";

function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <div className="section section-about-us">
          <Container>
            <LandingPageHeader />
            <Jumbotron>
              <h2>Principal's Message</h2>
              <Row>
                <Col md="4">
                  <div className="image-container">
                      <img src={require("assets/img/ryan.jpg")} alt={"Nature, United States"} />
                  </div>
                </Col>
                <Col md="1" />
                <Col md="6">
                <p>
                  According to the National Oceanic and Atmospheric
                      Administration, Ted, Scambos, NSID scentist, puts the
                      potentially record low maximum sea ice extent tihs year down
                      to low ice extent in the Pacific and a late drop in ice extent
                      in the Barents Sea. According to the National Oceanic and Atmospheric
                      Administration, Ted, Scambos, NSID scentist, puts the
                      potentially record low maximum sea ice extent tihs year down
                      to low ice extent in the Pacific and a late drop in ice extent
                      in the Barents Sea. 
                      The
                      potentially record low maximum sea ice extent tihs year down
                      to low ice extent in the Pacific and a late drop in ice extent
                      in the Barents Sea. 
                  </p>
                </Col>
                <Col md="1" />
              </Row>
              <p>
                  According to the National Oceanic and Atmospheric
                      Administration, Ted, Scambos, NSID scentist, puts the
                      potentially record low maximum sea ice extent tihs year down
                      to low ice extent in the Pacific and a late drop in ice extent
                      in the Barents Sea.
                      The
                      potentially record low maximum sea ice extent tihs year down
                      to low ice extent in the Pacific and a late drop in ice extent
                      in the Barents Sea. According to the National Oceanic and Atmospheric
                      Administration, puts the
                      potentially record low maximum sea ice extent tihs year down
                      to low ice extent in the Pacific and a late drop in ice extent
                      in the Barents Sea.
                  </p>
                  <br />
                  <h5> - Utkarsh Singh</h5>
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
                              {/*<CardSubtitle tag="h6" className="mb-2 text-muted">*/}
                              {/*    <a href={Constants.subdomains.notices} target="_blank">*/}
                              {/*        See all*/}
                              {/*    </a>*/}
                              {/*</CardSubtitle>*/}
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

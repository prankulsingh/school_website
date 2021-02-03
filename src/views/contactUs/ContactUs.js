import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import * as Constants from "../../constants/Constants";

function ContactUs() {
    return (
        <>
            <div className="wrapper">
                <div className="base-page section contact-us-page">
                    <Container>
                        <h2>Contact Us</h2>
                        <div className="section-contact-us text-center">
                            <Container>
                                <Row className="justify-content-center align-items-center">
                                    <Col md="5">
                                        {/* <p className="school-name left-align-text">
                                            {Constants.appStrings.schoolName}
                                            <br />
                                        {Constants.contactInfo.addressLine1}
                                            <br />
                                            {Constants.contactInfo.addressLine2}
                                        </p> */}
                                        {/* <p className="description left-align-text">
                                            <i className="now-ui-icons tech_mobile text-icon-align"/>
                                            <span className="test">{Constants.contactInfo.phone}</span>
                                        </p> */}
                                        <Card className="info-container">

                                            <i className="icon now-ui-icons ui-1_email-85"/>
                                            <h5>
                                                <a href={Constants.contactInfo.primaryEmail}>{Constants.contactInfo.primaryEmail}</a>
                                                <br />
                                                <a href={Constants.contactInfo.secondaryEmail}>{Constants.contactInfo.secondaryEmail}</a>
                                            </h5>
                                        </Card>
                                        <Card className="info-container">
                                            <i className="icon now-ui-icons location_pin text-icon-align"/>
                                            <h5>
                                                <a href={Constants.contactInfo.mapLink}>{Constants.contactInfo.address}</a>
                                            </h5>
                                        </Card>
                                        {/* <p className="description left-align-text">
                                            <i className="now-ui-icons ui-1_email-85 text-icon-align"/>
                                            {Constants.contactInfo.email}
                                        </p>
                                        <p className="description left-align-text">
                                            <i className="now-ui-icons location_pin text-icon-align"/>
                                            {Constants.contactInfo.address}
                                        </p> */}
                                        {/* <p className="description left-align-text">
                                            <i className="now-ui-icons location_world text-icon-align"/>
                                            {Constants.contactInfo.website}
                                        </p> */}
                                    </Col>
                                    <Col md="7">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14260.995220093771!2d83.77965713130111!3d26.672524031704185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993e83b54e4475b%3A0xca71109168eadb69!2sPadauli%2C%20Uttar%20Pradesh%20274206!5e0!3m2!1sen!2sin!4v1612377303482!5m2!1sen!2sin"
                                            width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false"
                                            tabIndex="0"
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default ContactUs;

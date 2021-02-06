import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import * as Constants from "../../constants/Constants";

function ContactUs() {
    return (
        <>
            <div className="wrapper">
                <div className="base-page section contact-us-page">
                    <Container>
                        <h2>{"Contact Us"}</h2>
                        <div className="section-contact-us text-center">
                            <Container>
                                <Row className="justify-content-center align-items-center">
                                    <Col md="12" lg="5" xl="5">
                                        <Card className="info-container">
                                            <i className="icon now-ui-icons tech_mobile"/>
                                            <h5>
                                                {
                                                    Constants.contactInfo.phone.map((phone, key) =>
                                                        <div key={key}>
                                                            <a href={`tel:${phone}`}>
                                                                {phone}
                                                            </a>
                                                            <br/>
                                                        </div>
                                                    )
                                                }
                                            </h5>
                                        </Card>
                                        <Card className="info-container">
                                            <i className="icon now-ui-icons ui-1_email-85"/>
                                            <h5>
                                                {
                                                    Constants.contactInfo.email.map((email, key) =>
                                                        <div key={key}>
                                                            <a href={`mailto:${email}`}>
                                                                {email}
                                                            </a>
                                                            <br/>
                                                        </div>
                                                    )
                                                }
                                            </h5>
                                        </Card>
                                        <Card className="info-container">
                                            <i className="icon now-ui-icons location_pin"/>
                                            <h5>
                                                <a href={Constants.contactInfo.mapLink}>{Constants.contactInfo.address}</a>
                                            </h5>
                                        </Card>
                                        <Card className="info-container">
                                            <i className="icon now-ui-icons location_world"/>
                                            <h5>
                                                <a href={Constants.contactInfo.website}>{Constants.contactInfo.website}</a>
                                            </h5>
                                        </Card>
                                    </Col>
                                    <Col md="12" lg="7" xl="7">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14260.995220093771!2d83.77965713130111!3d26.672524031704185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993e83b54e4475b%3A0xca71109168eadb69!2sPadauli%2C%20Uttar%20Pradesh%20274206!5e0!3m2!1sen!2sin!4v1612377303482!5m2!1sen!2sin"
                                            width="100%" height="520" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false"
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

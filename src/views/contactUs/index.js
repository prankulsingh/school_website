import React from "react";
import { Col, Container, Row } from "reactstrap";
import * as Constants from "../../constants/Constants";

function ContactUs() {
    return (
        <div className="section contact-us-page">
            <Container>
                <h2>Contact Us</h2>
                <div className="section section-contact-us text-center">
                    <Container>
                        <Row>
                        <Col md="5">
                            <p className="school-name left-align-text">
                                Indraprastha Institute of Information Technology, Delhi
                                <br />
                                Okhla Industrial Estate,Phase III
                                <br />
                                (Near Govind Puri Metro Station)
                                <br />
                                New Delhi, India - 110020
                            </p>
                            <p className="description left-align-text">
                            <i className="now-ui-icons tech_mobile text-icon-align"/>
                            <span className="test">{Constants.contactInfo.phone}</span>
                            </p>
                            <p className="description left-align-text">
                            <i className="now-ui-icons ui-1_email-85 text-icon-align"/>
                            {Constants.contactInfo.email}
                            </p>
                            <p className="description left-align-text">
                            <i className="now-ui-icons location_pin text-icon-align"/>
                            {Constants.contactInfo.address}
                            </p>
                            <p className="description left-align-text">
                            <i className="now-ui-icons location_world text-icon-align"/>
                            {Constants.contactInfo.website}
                            </p>
                        </Col>
                        <Col md="1"/>
                        <Col md="6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620642372196!2d77.22732101507562!3d28.612911982425544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1611582303803!5m2!1sen!2sin"
                                width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false"
                                tabIndex="0"
                            />
                        </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default ContactUs;

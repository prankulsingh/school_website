import React from "react";
import { Col, Container } from "reactstrap";
import * as Constants from "../../constants/Constants";

function AboutUs() {
    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                        <h2>{Constants.appStrings.aboutUs.aboutUs}</h2>
                        <div className="image-container">
                            <img src={Constants.aboutUsData.schoolPhoto} alt={"Nature, United States"} />
                        </div>
                        {Constants.aboutUsData.mainText.map((text, key) => <p key={key}>{text}</p>)}
                        <br/><br/>
                        <p className="blockquote blockquote-small">
                            {Constants.aboutUsData.quote.text}
                            <br/>
                            <small>{`- ${Constants.aboutUsData.quote.by}`}</small>
                        </p>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default AboutUs;

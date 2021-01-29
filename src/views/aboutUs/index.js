import React from "react";
import { Col, Container } from "reactstrap";

function AboutUs() {
    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                        <h2>About Us</h2>
                        <div className="image-container">
                            <img src={require("assets/img/bg1.jpg")} alt={"Nature, United States"} />
                        </div>
                        <p>
                            I will be the leader of a company that ends up being
                            worth billions of dollars, because I got the answers. I
                            understand culture. I am the nucleus. I think that’s a
                            responsibility that I have, to push possibilities, to show
                            people, this is the level that things could be at.
                            I will be the leader of a company that ends up being
                            worth billions of dollars, because I got the answers. 
                            I will be the leader of a company that ends up being
                            worth billions of dollars, because I got the answers. I
                            understand culture. I am the nucleus. I think that’s a
                            responsibility that I have, to push possibilities, to show
                            people, this is the level that things could be at.
                        </p>
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
                        <br />
                        <br />
                        <p className="blockquote blockquote-small">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br />
                      <small>- Noaa</small>
                    </p>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default AboutUs;

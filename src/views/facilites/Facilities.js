import React from "react";
import {Container} from "reactstrap";
import Carousel from "../../commonComponents/Carousel";
import * as Constants from "../../constants/Constants";

function Facilities() {
    return (
        <>
            <div className="wrapper">
                <div className="base-page section contact-us-page">
                    <Container>
                        <h2>Facilities</h2>
                        {
                            Constants.facilitiesData.mainData.map((facilityData, key) =>
                                <div style={{paddingBottom: "80px"}} key={key}>
                                    <h3>{facilityData.title}</h3>
                                    {
                                        facilityData.text && facilityData.text.length > 0 &&
                                        facilityData.text.map((text, key) => <p key={key}>{text}</p>)
                                    }
                                    <Carousel data={facilityData.carousalData}/>
                                </div>
                            )
                        }
                        <h3>Other notable facilities</h3>
                        <ol> { Constants.facilitiesData.extraFacilities.map((facility, key) => <li key={key}>{facility}</li>) } </ol>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Facilities;

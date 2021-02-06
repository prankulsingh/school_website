import React from "react";
import {Container} from "reactstrap";
import * as Constants from "../../constants/Constants";

function CoScholasticActivities() {
    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                        <h2>{Constants.appStrings.school.coScholasticActivities}</h2>
                        <p>
                            We offer an array of Co- Scholastic activities.
                        </p>
                        <ul>
                            <li>Yoga & Meditation</li>
                            <li>Value Education</li>
                            <li>‘Clean the school campus’ campaign</li>
                            <li>Say no to plastic Bags</li>
                            <li>Power Point Presentations</li>
                            <li>Dramatics & Role plays.</li>
                            <li>Radio Shows</li>
                            <li>Experiential Learning</li>
                            <li>Recycling of Paper</li>
                            <li>Performing Art & Visual Art</li>
                        </ul>
                        <p>
                            Education is incomplete if we cannot teach our children to respect one another.
                        </p>
                        <p>
                            Our educational philosophy of humanistic approach is the fundamental and cardinal point in the value based education. “We want our students to be disciplined and efficient, fortified by ethical and spiritual values. The school blends inner response of the spirit with the immaterial progress, a new civilization, with the strength of our heritage, the creativity of the spring time of youth with the unconquerable spirit of the people”.
                        </p>
                        <p>
                            We will continuously strive to reach our goal in making this world a better place to live in.
                        </p>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default CoScholasticActivities;

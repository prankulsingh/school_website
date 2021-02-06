import React from "react";
import {Container} from "reactstrap";
import * as Constants from "../../constants/Constants";

function ELearning() {
    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                        <h2>{Constants.appStrings.school.coScholasticActivities}</h2>
                        <p>
                            E-Learning improves teacher effectiveness and productivity in class. It brings abstract and difficult curriculum concepts to life inside classrooms. It also enables teachers to instantly assess and evaluate the learning achieved by their students in class.
                        </p>
                        <ul>
                            <li>The classrooms equipped with a projector, computer and latest technology enhances learning in a joyous manner.</li>
                            <li>Pre-School class rooms are facilitated with touch screen monitors.</li>
                            <li>A special Test centre has been set up in the computer lab where teachers can prepare their tests and conduct them online.</li>
                            <li>Each classroom has been provided with a log book where the teachers register their suggestions.</li>
                            <li>Scientific facts and logical reasoning which seemed to be (hard nut to crack) baffling have suddenly assumed a friendly connotation with the help of e-learning.</li>
                            <li>Various historical events are brought to life and relived through computer aided learning.</li>
                            <li>The Internet facility has opened avenues for an unlimited scope for learning. School provides fast Broadband internet connection round the clock and offline UPS for system back up along with a good collection of educational software. In a world of inter connectivity computers play a significant role. Every student is provided with a computer to explore the world of technology in the high-tech computer lab.</li>
                        </ul>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default ELearning;

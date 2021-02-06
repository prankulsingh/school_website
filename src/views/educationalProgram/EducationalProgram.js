import React from "react";
import {Container} from "reactstrap";
import * as Constants from "../../constants/Constants";
import "./EducationalProgram.scss"

function EducationalProgram() {
    return (
        <>
            <div className="wrapper">
                <div className="section base-page vision-page">
                    <Container>
                        <h2>{Constants.appStrings.school.educationalProgram}</h2>
                        <p>
                            {Constants.appStrings.schoolName} stands as a ‘Citadel of Learning’ to develop the minds and foster the ability of taking initiative in the students. The School believes that education provides a comprehensive value base for students to develop inquisitiveness and acquire a broader view where the children can be confident to aim for the highest and tap their potential to the fullest. Assessment focuses on students through knowledge and complex reasoning processes, not mere recall of information. {Constants.appStrings.schoolName.toShortForm()} in the pursuit of outstanding board results, but will definitely aim for high accomplishments. With emphasis and stress on holistic education, excellent board results, will ultimately accrue. What we do at {Constants.appStrings.schoolName.toShortForm()} is to inspire our students to make a difference to the world they inherit by putting their knowledge into constructive channels. We are always thinking of new ways of developing and innovating to create an even better and well rounded educational experiences for the students and staff in this diverse environment.
                        </p>
                        <p>
                            A dynamic curriculum demands constant revision, which could depend on multi factors. The school has an imaginative comprehensive programming of the curriculum that is continuously enriched. It is also a broad based curriculum providing developmental and imaginative education, prescribing the minimum levels of learning and competence at each stage. Each class and each subject area of learning is of prime focus. The curriculum provides holistic education aimed at all round development of its pupils. By stressing this, the school encourages students to retrospect and discover perceptions of themselves, while reflecting on the nature and texture of their exterior lives.
                        </p>
                        <p>
                            Teaching is made more interesting through effective teaching tools such as Smart Class Rooms, Audio-Visual charts, models, flash cards, role plays, debates, drama, quiz, projects, experiments, learning by doing, teaching through Music, Virtual Learning, Power Point Presentations etc. to make Teaching-Learning process more enjoyable.
                        </p>
                        <p>
                            Educational Program is age appropriate categorizing of Junior wing, Primary Wing, Middle Wing, Secondary Wing and Senior secondary Wing.
                        </p>
                        <p className="blockquote blockquote-small">
                            “The goal of early childhood education is to activate the child’s natural desire to know.”
                            <br/>
                            <small>- Maria Montessori</small>
                        </p>
                        <h3 className="heading-margin">Junior Wing – Providing Roots to Wings</h3>
                        <p>
                            A home away from home. The Junior Wing provides a perfect blend of stimulating environment and sensitive caretaking. It initiates the grooming and nurturing of ignited minds which metamorphise the child for the formal education they embark upon. Here learning is self-initiated through hands on experiences through the Play Way Method. Our curriculum comprises a progressive and constructive frame work at early childhood stages sensitizing holistic development of all the domains. The foundation is laid to optimize cognitive skills, emotional control, creative and aesthetic appreciation and language skills with a systematic and scientific approach because it is believed that the early years of a child’s life last a lifetime.
                        </p>
                        <p>
                            All our planning is done on the basis of differentiated learning, which not only keeps in mind the exceptionalities and polarities of every student but also awakens the joy of attaining knowledge in young children.
                        </p>
                        <p>
                            Our children take their maiden step, and leave the gentle cocoon purview of their parents, with confidence, They will surely emerge as young responsible citizens of tomorrow, when they are ready to step out from the school because we believe that “The best of education is educating by the heart”.
                        </p>
                        <h3 className="heading-margin">Primary Wing</h3>
                        <p>
                            Classes I to V have a continuous assessment programme following the latest 5 points grading pattern prescribed by CBSE. It is done through class-room observation in an informal and congenial atmosphere evaluated in grades by four assessments. Teaching is emphasised through learning by doing i.e., activity based curriculum system.Parents feel less burdened as there are regular revisions with a lot of practice through worksheets, class tests, revision tests and model test papers. English is the first language and also the medium of instruction. The second language is Hindi. The third language has to be chosen from any one of the following: Sanskrit/French/Spanish.
                        </p>
                        <h3 className="heading-margin">Middle Wing</h3>
                        <p>
                            For Classes VI onwards, teaching/ learning process is made more effective through audio-visual aids. Many assignments, class tests, revision tests are taken from time to time. Teaching is made more interesting through computer aided learning in the class room and practicing various teaching strategies such as flip classrooms etc.
                        </p>
                        <h3 className="heading-margin">Secondary Wing</h3>
                        <p>
                            The curriculum lays equal emphasis on scholastic as well as proficiency of learners in the acquisition of essential life-skills, attitudes and values. Interests and achievements of students in outdoor & co-curricular activities such as in sports and games is  given utmost importance.
                        </p>
                        <h3 className="heading-margin">Senior Secondary Wing</h3>
                        <p>
                            The school offers all the streams for providing a wider choice for the students of XI and XII giving them a comfort level in pursuing their dreams ahead Science( Medical and Non-Medical), Commerce  and Humanities streams for classes XI and XII.
                        </p>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default EducationalProgram;

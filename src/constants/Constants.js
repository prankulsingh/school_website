import "Utils/AppUtils"

export const appStrings = {
    schoolName: "Radiance Global School",
    notices: "Important Notices",
    principalsMessageLabel: "Board's Message",
    aboutUs: {
        aboutUs: "About Us",
        vision: "Core Values",
        mission: "Our mission",
        managedBy: "Managed By",
    },
    school: {
        school: "School",
        coScholasticActivities: "Co-Scholastic Activities",
        educationalProgram: "Educational Program",
        eLearning: "E-Learning",
        facilities: "Facilities",
    },
    contactUs: "Contact Us"
};

export const contactInfo = {
    phone: ["+91 9999999999"],
    email: ["patelsewatrust@gmail.com", "radianceglobalschool@gmail.com"],
    address: `${appStrings.schoolName}, Village Padauli (12 KM from Bareilly), Bareilly-Bisalpur Road (NH730B)`,
    mapLink: "https://www.google.com/maps/place/Padauli,+Uttar+Pradesh+274206/@26.6725242,83.7840345,16z/data=!3m1!4b1!4m5!3m4!1s0x3993e83b54e4475b:0xca71109168eadb69!8m2!3d26.6728198!4d83.7894579",
    website: "https://localhost:3000/",
};

export const subdomains = {
    aboutUs: "/about-us",
    notices: "/notices",
    vision: "/vision",
    contactUs: "/contact-us",
    root: "/",
    components: "/components",
    managedBy: "/managed-by",
    facilities: "/facilities",
    profile: "/profile",
    login: "/login",
    icons: "/icons",
    educationalProgram: "/educational-program",
    coScholasticActivities: "/co-scholastic-activities",
    eLearning: "/e-learning",
};

export const externalLinks = {
    facebook: "//www.facebook.com",
    twitter: "//www.twitter.com",
    instagram: "//www.instagram.com",
};

export const apiKeys = {
    googleSheetKey: "1VERT3eHvBnqE5L4WbyjH8FULN7WgoQhoBrNAx7xPvos"
};

export const aboutUsData = {
    mainText:[
        appStrings.schoolName + " is a composite Senior Secondary Co-Educational school recognized by the Department of Education and affiliated to the CBSE (Central Board of Secondary Education) upto class XII with Science(Medical and Non-Medical), Commerce and Humanities streams. The USP of the school is ‘Value for Money’ as the school believes in providing quality education at an affordable price. The institution believes in Gandhian philosophy of the all-round development of body, mind and soul.",
        "The school follows CBSE curriculum which provides holistic education aimed at an all round development of its pupils. By stressing this, the school follows child-centric education which encourages students to think out of the box, retrospect and discover perceptions of themselves, while reflecting on the nature and texture of their exterior lives. A progressive and constructive frame work at each stage in life wherein the foundation is laid to optimize cognitive skills, emotional control, creative and aesthetic appreciation and language skills with a systematic and scientific approach.",
        "The parents play a very important role as they are the most important stake holders of the school, and they partner with the school for various day to day functioning and school activities.",
        "To provide international exposure and add dimensions of Internationalism in the curriculum the school has collaborated with various countries like France, Denmark, Nepal etc.",
    ],
    quote: {
        text: "“haha lol”",
        by: "pappu"
    },
    schoolPhoto: "//cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498_1280.jpg"
};

export const landingPageData = {
    carouselData: [
        {
            src: "//cdn.pixabay.com/photo/2013/07/25/10/12/cricket-166794_1280.jpg",
            altText: "Cricket",
            caption: "Cricket",
        },
        {
            src: require("assets/img/basketball.png"),
            altText: "Basketball",
            caption: "Basketball",
        },
        {
            src: "//cdn.pixabay.com/photo/2017/08/10/09/40/sport-2620596_1280.jpg",
            altText: "Football",
            caption: "Football",
        },
    ],
    principalsMessageData: {
        message: [
            "I believe my role as an educator is to guide and nurture the next generation to establish skills to achieve health, respect, prosperity and fulfillment.",
            "I am passionate about students being empowered to succeed. As Principal, I use all tools available to inspire staff, students and community to work together to promote student achievement and well-being.",
            "I am an avid supporter of effective and innovative professional development that encourages teachers and principals to be reflective and to continuously examine our practice to provide quality teaching and learning for each student. My role as Principal is to keep up with latest trends and research and be an active partner in the school's professional development.",
            "The ability to be innovative and creative is important to me. I enjoy being challenged and inspired by the people around me. I aim to enthuse and challenge staff and students to also be inventive and imaginative in their learning and day to day tasks.",
            "I believe that having quality, inspirational and passionate teachers is essential to a school's success. To borrow John Hattie's words; “Teachers should build classroom climates where errors are welcome, student engagement is the norm, questioning is high and students gain reputations as effective learners.”",
            "I enjoy celebrating successes and acknowledge hard work of staff, students and community and believe this is one of the contributors fundamental to a happy school environment. All staff, students and community should feel valued and appreciated at school.",
            "Community engagement and involvement in the school is important to me as Principal. I regularly consult with my community as part of school self review and encourage community engagement in the curriculum and learning programmes.",
        ],
        by: "Utkarsh Singh"
    }
};

export const trustees = [
    {
        name: 'Smt. Neelima Singh',
        photo: require('assets/img/ryan.jpg'),
        designation: 'Trustee',
        description: null,
    },
    {
        name: 'Shri Dharam Pal Gangwar',
        photo: require('assets/img/ryan.jpg'),
        designation: 'Trustee',
        description: null,
    },
    {
        name: 'Shri Umesh Chandra',
        photo: require('assets/img/ryan.jpg'),
        designation: 'Trustee',
        description: null,
    },
    {
        name: 'Smt. Pushpa Devi',
        photo: require('assets/img/ryan.jpg'),
        designation: 'Trustee',
        description: null,
    },
    {
        name: 'Smt. Usha Verma',
        photo: require('assets/img/ryan.jpg'),
        designation: 'Trustee',
        description: null,
    },
    {
        name: 'Shri Omkar Gangwar',
        photo: require('assets/img/ryan.jpg'),
        designation: 'Trustee',
        description: null,
    },
    {
        name: 'Smt. Yogita Katiyar',
        photo: require('assets/img/ryan.jpg'),
        designation: 'Trustee',
        description: null,
    }
];

export const visionData = {
    visionPhoto: require("assets/img/vision.png"),
    statements: [
        "We want to develop well rounded, confident and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all achievements are celebrated. We believe that a happy child is a successful one. We are committed to providing a positive, safe and stimulating environment for children to learn, where all are valued. We intend that all children should enjoy their learning, achieve their potential and become independent life-long learners.",
        "We believe that education should take place in a fully inclusive environment with equal opportunities for all and that all children should learn to value religious and cultural differences. Our school strives to be at the centre of the local community with positive and effective links to the wider and global communities. We aim to develop well-rounded and thoughtful students prepared to cope with a changing post-modern and globalized world. Each child should develop a curiosity of learning, discover their interests and grow in their love of learning. We also desire to have strong families through parent support/fellowship and skills training.",
        "Our vision includes but is not limited to:"
    ],
    visionPointers: [
        "Bring out the talents and skills of the students through academic's co-curricular activities",
        "Develop the qualities of self discipline and self respect.",
        "Leadership qualities develop or instill.",
        "Create responsible individuals with emotional bondages.",
        "Prepare them to face challenge of life with confidence and strength.",
        "Create good human beings with compassion, love and care for others.",
        "Develop the overall personality.",
    ]
};

export const missionData = {
    statements: [
        "The school is committed to provide a safe, conducive and stimulating atmosphere where the young minds can enjoy their learning experiences, practice reflective, self directed, lifelong learning and prepare for the ultimate exam called LIFE.",
        "The school aims to create an Innovative Lab primarily for delivering a hands-on-experience and inculcating skills in (STEAM) Science, Technology, Engineering, Arts and Maths. Hence providing efficient tools to guide, inspire and evaluate the cognitive and imaginative thinking capacities of each students. The school is committed to nurture future global citizens who would demonstrate a commitment to moral, social, ethical and legal responsibilities.",
        "To give wings to their dreams and roots to hold steadfast to their aspirations, the school aspires to equip students with modern knowledge with their feet firmly embedded in the values thereby enabling them to be the individuals who would imprint an indelible mark globally .To endow each student with inner strength and resilience to accept failures gracefully and cherish victories nobly.",
    ],
    cards: [
        {
            title: 'Sports',
            text: 'Provide exceptional care to children while fostering each child’s intellectual, social, physical and moral development in an academic-rich environment.'
        },
        {
            title: 'World Class Education',
            text: 'Provide a safe learning environment with a welcoming atmosphere which creates a sense of belonging amongst the families.'
        },
        {
            title: 'Sports',
            text: 'Provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning.'
        },
        {
            title: 'Sports',
            text: 'Text'
        },
    ]
};

export const facilitiesData = {
    mainData: [
        {
            title: "Sports",
            text: [
                "Physical education is an integral part of comprehensive educational process. Various games and sports activities are designed to make the students healthy and promote fitness.",
                "The school prides in having a state of art sports facilities such as half Olympiad size Swimming Pool with Kiddies Pool, Badminton Courts, Basket Ball Court, Lawn Tennis Court, Skating Rink, Football/Hockey Ground, Yoga Arena, Gymnastics Arena and T.T. Arena.",
                `Students of ${appStrings.schoolName.toShortForm()} continuously bring home numerous accolades in sports like Gymnastics, Skating, badminton, yoga, basket ball, Hand ball, foot ball, Table Tennis, Fencing etc at Zonals, State, National and International Levels, of which the ${appStrings.schoolName.toShortForm()} is proud of. `,
                "To promote health and wellness various events are conducted under the Health and Physical Education (HPE) such as health camps, annual sports meet is organized to facilitate the budding sports stars of school and morning sessions of various physical activities."
            ],
            carousalData: [
                {
                    src: "//cdn.pixabay.com/photo/2013/07/25/10/12/cricket-166794_1280.jpg",
                    altText: "Cricket",
                    caption: "Cricket",
                },
                {
                    src: require("assets/img/basketball.png"),
                    altText: "Basketball",
                    caption: "Basketball",
                },
                {
                    src: "//cdn.pixabay.com/photo/2017/08/10/09/40/sport-2620596_1280.jpg",
                    altText: "Football",
                    caption: "Football",
                },
            ]
        },
        {
            title: "Labs",
            text: [
                "hello",
                "bro"
            ],
            carousalData: [
                {
                    src: require("assets/img/comp.png"),
                    altText: "Nature, United States",
                    caption: "Computer Lab",
                },
                {
                    src: require("assets/img/science_lab.png"),
                    altText: "Somewhere Beyond, United States",
                    caption: "Science Lab",
                }
            ]
        }
    ],
    extraFacilities:[
        "Well equipped Science Labs",
        "Mathematics Lab",
        "Computer Labs (Senior & Junior)",
        "Music room",
        "Art & Craft",
        "Yoga, Tai-kwan-do (martial arts), Karate",
        "Library (to inculcate reading habits library is equipped with all the subject related books, ref.books, Magazines , Periodicals etc.",
        "Sports room for indoor games",
        "Playground for Sports & Games",
        "Members of N.I.E.",
        "Eco club (Which organizes many activities to create awareness about environmental issues.",
        "Health Care: Periodical check up is conducted by a team of medical specialists.",
        "Magazines & Bulletin Boards: To provide opportunity for creative writing and sketching.",
        "Educational Tours: To create cultural awareness class picnics as well as educational tours are conducted.",
        "Pottery & clay modeling",
        "S.U.P.W activities",
        "Astronomy club (conducted throughout the year)",
        "Audio visual facilities",
        "Counselor cum Psychologist to guide and help children in their day to day stress related problems",
        "Integration of technology in teaching through Edu. Com from classes III to VIII",
        "School Band",
        `Foreign language (French) is taught from class V to X which gives an extra edge to ${appStrings.schoolName.toShortForm()} students.`,
        "Summer camps",
        "Career Counseling sessions for classes IX to XII",
        "Remedial classes to the weak students after the school hours.",
        "Life skill classes for personality development",
    ]
};
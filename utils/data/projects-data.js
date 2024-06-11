import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Adria banking system',
        description: "We designed and developed a Full Stack application titled 'Analysis and Development of an Online Banking System.' The primary objective of this project was to address the fundamental requirements of modern banking management.",
        tools: ['Monolith', 'Java', 'Spring boot', 'Spring security', 'Web Socket', 'Mockito', 'Junit', 'MySql', 'ReactJs', 'Redux', 'Figma'],
        role: 'Full stack Developer',
        code: 'https://github.com/E-banking-system',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Education payment system',
        description: 'In order to digitalize the payment process, our objective is to streamline payment management while ensuring the traceability of payment records for each student. The goal is to support their academic journey by ensuring smooth and transparent financial management, simplifying the validation process for the administration.',
        tools: ['Microservices', 'Java', "Spring boot", "Spring security", "Spring cloud", "MySql", "Auth2.0", "Reactjs", "Axios"],
        role: 'Full Stack Developer',
        code: 'https://github.com/The-A3Z-Team',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Project manager system',
        description: 'The goal of this project is the development of a JAVA application to manage the projects. This application will allow you to manage project tasks, resources, and displays the schedule in a Gantt chart.',
        tools: ['Java', 'MySql', 'JavaFx', 'Scene Builder '],
        role: 'Full Stack Developer',
        code: 'https://github.com/TAFFAHACHRAF/Tasks-management-project',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Supply chain and logistic app',
        description: "The objective of this project is the realization of a full-stack web application in the form of a reservation system for commercial consultations, and a directory of product source links, simple and easy to use.",
        tools: ['ReactJs', 'NodeJs', 'MongoDb', 'Mongoose', "ExpressJs"],
        code: 'https://github.com/TAFFAHACHRAF/Guide-Derb-Omar-App',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];

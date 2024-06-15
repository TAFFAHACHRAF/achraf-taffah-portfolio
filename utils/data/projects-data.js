import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Adria Banking System',
        description: "We designed and developed a Full Stack application titled 'Analysis and Development of an Online Banking System.' The primary objective of this project was to address the fundamental requirements of modern banking management.",
        tools: ['Monolith', 'Java', 'Spring Boot', 'Spring Security', 'WebSocket', 'Mockito', 'Junit', 'MySQL', 'ReactJS', 'Redux', 'Figma'],
        role: 'Full Stack Developer',
        code: 'https://github.com/E-banking-system',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Education Payment System',
        description: "To digitalize the payment process, our objective is to streamline payment management while ensuring the traceability of payment records for each student. This project involved administering student payment processes, implementing security measures, conducting testing of the payment system, and integrating the module with the ENSET ERP.",
        tools: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Keycloak', 'Spring Cloud Config', 'Junit5', 'Jest', 'MySQL', 'ReactJS', 'Bootstrap'],
        role: 'Full Stack Developer',
        code: 'https://github.com/The-A3Z-Team',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Patient Record Management SAAS',
        description: 'This project involved overseeing patient care and management, maintaining and updating patient records, formulating a payment strategy, and conducting system testing in the production environment. The goal was to create a secure and efficient system for managing patient records.',
        tools: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Keycloak', 'Spring Cloud Config', 'Junit5', 'Jest', 'PostgreSQL', 'Spring Batch', 'ReactJS', 'Redux', 'Tailwind'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Supply Chain and Logistic App',
        description: "The objective of this project is the realization of a full-stack web application in the form of a reservation system for commercial consultations, and a directory of product source links, simple and easy to use. Responsibilities included resolving issues related to transportation and importation, and enhancing communication between transportation experts.",
        tools: ['ReactJS', 'NodeJS', 'MongoDB', 'Mongoose', 'ExpressJS'],
        role: 'Full Stack Developer',
        code: 'https://github.com/TAFFAHACHRAF/Guide-Derb-Omar-App',
        demo: '',
        image: ayla,
    },
    {
        id: 5,
        name: 'Security and User Activity Tracking System',
        description: 'This project involved solving problems related to security and tracing every user action on a centralized database. The objective was to ensure a secure and traceable system for user activities.',
        tools: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Keycloak', 'Spring Cloud Config', 'Junit5', 'Jest', 'PostgreSQL', 'Spring Batch', 'ReactJS', 'Redux', 'Tailwind', 'JPA', 'Hibernate', 'Spring MVC'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: '',
    }
];

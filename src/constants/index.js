import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fau,
  lab,
  jsm,
  gpt,
  jobit,
  Growth,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SaaS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "QuickStart Full Stack Web Dev Bootcamp",
    company_name: "Florida Atlantic University",
    icon: fau,
    iconBg: "#383E56",
    date: "January 2022 - August 2022",
    points: [
      "26 week program that started with basic concepts & concluded with the skills to execute real- life web development projects.",

      "Blended theory to build a solid foundation coupled with projects that allowed me to apply theory to practical industry scenarios.",

      "Learned both front - end and back - end programming languages like JavaScript, HTML5, React, MySQL and more.",
    ],
  },
  {
    title: "MERN Stack Bootcamp",
    company_name: "London App Brewery",
    icon: lab,
    iconBg: "#E6DEDD",
    date: "September 2022 - December 2022",
    points: [
      "Completed a 12 - week intensive web development boot camp, specializing in MERN stack development",
      "Demonstrated an exceptional grasp of the fundamentals of web development and the MERN stack",

      "Developed a comprehensive understanding of web application architecture and design",
      "Excelled in the use of modern web development tools and technologies, including MongoDB, Express.js, React.js, and Node.js",
      "Acquired advanced skills in JavaScript, HTML, CSS, React.js, Node.js, Express.js, MongoDB, and Git",

      "Collaborated effectively with a team of developers to deliver complex and innovative web applications",
      "Received a completion certificate and recognition for outstanding performance in the boot camp",
    ],
  },
  {
    title: "React Native/React Development Course",
    company_name: "JS Mastery",
    icon: jsm,
    iconBg: "#383E56",
    date: "Febuary 2023 - Present",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",

      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",

      "Implemented responsive design and ensuring cross-browser compatibility.",

      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
];


const projects = [
  {
    name: "Chat-GPT Landing Page",
    description:
      "Landing page for the popular Chat-GPT AI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "jest.js",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/kirizarry47/gpt3_landingpage",
  },
  {
    name: "Jobs",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kirizarry47/react_native_jobs",
  },
  {
    name: "Growth Finance",
    description:
      "A MERN Finance Dashboard App that has Machine Learning Predictions. The frontend consist of Vite for the starter application, Redux Toolkit for state management, Material UI for component library, and Recharts for Charts. For the backend Node Js as the runtime, Express Js as the backend framework, and MongoDB for the database.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: Growth,
    source_code_link: "https://github.com/kirizarry47/finance_dashboard",
  },
];

export { services, technologies, experiences, projects };

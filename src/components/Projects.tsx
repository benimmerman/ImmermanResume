import type { Projects } from "./ProjectsCard";
import TracklyImage from "./TracklyImage.jpg";
import ResumeProjectImage from "./ResumeProjectImage.jpg";

export const projects: Projects[] = [
  {
    name: "Trackly",
    description:
      "Progressive Web Application (PWA) hosted on Render. Responsive web app that allows users to create, manage, and update task lists.",
    bullets: [
      {
        text: " Backend API developed using Django REST Framework, supporting full CRUD operations (GET, POST, PUT, and DELETE) and leveraging a PostgreSQL database. Created API documentation using Swagger OpenAPI.",
      },
      {
        text: "UI developed using JavaScript, React, Vite and Tailwind CSS with state management handled with Redux.",
      },
      {
        text: "Implemented user authentication, account creation, and session management with JWT tokens.",
      },
      {
        text: "Features include creating new/deleting existing lists, adding/modifying/deleting list items, and toggling completion status. ",
      },
    ],
    links: [
      {
        link: "https://trackly-jaf5.onrender.com/",
        name: "Trackly",
      },
      {
        link: "https://github.com/benimmerman/tracklyBack",
        name: "Backend",
      },
      {
        link: "https://github.com/benimmerman/trackly",
        name: "Frontend",
      },
    ],
    skills: [
      "Python",
      "Django",
      "RESTful API",
      "JavaScript",
      "React",
      "Redux",
      "Tailwind",
    ],
    image: TracklyImage,
  },
  {
    name: "ImmermanResume",
    description:
      "Web application built with TypeScript, React, and Tailwind CSS. This project is a personal website that showcases my projects, experience, and contact information.",
    bullets: [
      {
        text: "Features include a responsive design, a clean and modern UI, and a smooth user experience.",
      },
    ],
    links: [
      {
        link: "",
        name: "ImmermanResume",
      },
      {
        link: "https://github.com/benimmerman/ImmermanResume",
        name: "Frontend",
      },
    ],
    skills: ["TypeScript", "React", "Tailwind", "Vite", "UI Design"],
    image: ResumeProjectImage,
  },
];

import type { Projects } from "./ProjectsCard";

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
      "Tailwind",
    ],
  },
];

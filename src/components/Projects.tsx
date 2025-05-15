import type { Projects } from "./ProjectsCard";
import TracklyImage from "../../public/TracklyImage.jpg";
import ResumeProjectImage from "../../public/ResumeProjectImage.jpg";

export const projects: Projects[] = [
  {
    name: "Trackly",
    bullets: [
      {
        text: "Progressive Web Application (PWA) hosted on Render that enables users to create, manage, and persist custom checklists across sessions.",
      },
      {
        text: "Backend powered by Django REST Framework with JWT authentication.",
      },
      {
        text: "Data stored in a PostgreSQL database with secure password encryption.",
      },
      {
        text: "Frontend developed using React, Redux, and Vite for performance and responsiveness.",
      },
      {
        text: "RESTful communication handled via Axios.",
      },
      {
        text: "Designed for future feature expansion, including shared list collaboration and expense tracking between users.",
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
    name: "Personal Website",
    bullets: [
      {
        text: "Responsive personal portfolio site with mobile-first design.",
      },
      {
        text: "Built with React, Vite, and TypeScript.",
      },
      {
        text: "Deployed via GitHub Pages for ease of access and maintenance.",
      },
      {
        text: "Showcases profile overview with resume and external links.",
      },
      {
        text: "Expandable professional experience cards with skill tags.",
      },
      {
        text: "Interactive project gallery with image previews and tech stacks.",
      },
      {
        text: "Education and certifications with relevant credentials.",
      },
    ],
    links: [
      {
        link: "https://www.benimmerman.com",
        name: "Personal Website",
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

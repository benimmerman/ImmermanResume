import type { FC } from "react";
import ProfilePic from "./ProfilePic.jpg";
import ImmermanResumePDF from "./ImmermanResume.pdf";
import {
  FaLinkedinIn,
  FaGithub,
  FaFilePdf,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ExperienceCard } from "./ExperienceCard";
import { professionalExperience } from "./ProfessionalExperience";
import { ProjectsCard } from "./ProjectsCard";
import { projects } from "./Projects";
import { EducationCard } from "./EducationCard";
import { education } from "./Education";

interface PersonalLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const personalLinks: PersonalLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/benjamin-immerman-799020171",
    icon: <FaLinkedinIn />,
  },
  {
    name: "GitHub",
    url: "https://github.com/benimmerman",
    icon: <FaGithub />,
  },
  {
    name: "Resume",
    url: ImmermanResumePDF,
    icon: <FaFilePdf />,
  },
];

const contactInfo = [
  { type: "email", value: "ben.immerman@gmail.com", icon: <FaEnvelope /> },
  { type: "phone", value: "(770) 310-1506", icon: <FaPhone /> },
  { type: "location", value: "New York, NY", icon: <FaMapMarkerAlt /> },
];

const sections = ["About", "Experience", "Projects", "Education & Certifications"];

const FrontPage: FC = () => {
  return (
    <div className="flex flex-col bg-beige sm:flex-row min-h-screen overflow-auto">
      {/* Left 1/3: Profile (static on desktop) */}
      <div
        className="w-full sm:w-1/3 bg-background text-white flex flex-col justify-between items-center pt-24 pb-8 min-h-screen
                    sm:fixed sm:top-0 sm:left-0 sm:h-screen"
      >
        {/* Main profile content */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[400px] mx-auto">
          <div className="flex items-center justify-center w-full">
            <img
              src={ProfilePic}
              className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full object-cover shadow-md"
              alt="Benjamin Immerman"
            />
          </div>
          <h1 className="mt-4 sm:mt-8 text-2xl sm:text-4xl font-bold text-center">
            Benjamin Immerman
          </h1>
          <div className="mt-2 sm:mt-4 flex flex-col gap-2 w-full items-center">
            {personalLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-bold no-underline transition-colors duration-300 flex items-center gap-2 hover:text-white hover:underline"
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>
        {/* Contact info at the bottom */}
        <div className="w-full max-w-[400px] mx-auto mt-8">
          <div className="flex flex-col gap-1 text-center text-sm sm:text-lg">
            {/* Email on its own line */}
            <div className="flex justify-center items-center gap-2 mb-1">
              {contactInfo[0].icon}
              <a
                href={`mailto:${contactInfo[0].value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline transition-colors duration-300 hover:text-white hover:underline"
              >
                {contactInfo[0].value}
              </a>
            </div>
            {/* Phone and location on the next line */}
            <div className="flex justify-center items-center gap-2">
              {contactInfo[1].icon}
              <span>{contactInfo[1].value}</span>

              {contactInfo[2].icon}
              <span>{contactInfo[2].value}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right 2/3: Content */}
      <div
        className="flex flex-col w-full min-h-screen sm:overflow-y-auto
                   snap-y snap-mandatory sm:snap-none sm:ml-[33.333333%]"
      >
        {/* about */}
        <div className="min-h-screen sm:min-h-auto bg-beige h-auto text-main ">
          <div className="w-full flex items-start justify-center snap-start">
            <div className="px-4 sm:px-8  w-full">
              <div className="sm:sticky sm:top-0 py-2 bg-beige/90">
                <h2 className="text-2xl font-bold">{sections[0]}</h2>
              </div>
              <p className="mb-3">
                I'm a former Mechanical Engineer turned Software Developer, with
                a passion for building responsive and user friendly web
                applications and cloud-based solutions. With a solid foundation
                in engineering principles, I bring a systems-thinking mindset
                and a sharp problem-solving approach to every project I work on.
                My experience spans full-stack web development, data pipelines,
                and automation—delivered through modern tools like Django,
                React, AWS, and PostgreSQL. I'm a quick learner who thrives on
                picking up new skills and technologies, and I enjoy tackling
                fresh challenges that push me to grow.
              </p>
              <p className="mb-3">
                I've developed a strong ability to translate complex
                requirements into elegant, efficient solutions. I thrive in
                collaborative Agile teams, where I contribute to everything from
                API design and cloud infrastructure to frontend interfaces and
                stakeholder training.
              </p>
              <p className="mb-3">
                In my spare time, I enjoy reading, drawing, hanging with
                friends, cheering on Georgia Tech athletics, and the occasional
                Central Park picnic on a sunny day.
              </p>
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="min-h-screen sm:min-h-auto bg-beige h-auto text-main mt-8 pb-4">
          <div className="w-full flex items-start justify-center snap-start">
            <div className="px-4 sm:px-8 w-full">
              <div className="sm:sticky sm:top-0 py-2 bg-beige/90">
                <h2 className="text-2xl font-bold">{sections[1]}</h2>
              </div>
              {professionalExperience.map((exp, idx) => (
                <ExperienceCard key={idx} experience={exp} />
              ))}
            </div>
          </div>
        </div>

        {/* projects */}
        <div className="min-h-screen sm:min-h-auto bg-gray-800 h-auto text-main pt-8">
          <div className="w-full flex items-start justify-center snap-start">
            <div className="px-4 sm:px-8 w-full">
              <div className="sm:sticky sm:top-0 py-2 bg-gray-800/90">
                <h2 className="text-2xl font-bold text-white">{sections[2]}</h2>
              </div>
              {projects.map((project, idx) => (
                <ProjectsCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* education and certifications*/}
        <div className="min-h-screen sm:min-h-auto bg-gray-800 h-auto text-main pt-8">
          <div className="w-full flex items-start justify-center snap-start">
            <div className="px-4 sm:px-8 w-full">
              <div className="sm:sticky sm:top-0 py-2 bg-gray-800/90">
                <h2 className="text-2xl font-bold text-white">{sections[3]}</h2>
              </div>
              {education.map((edu, idx) => (
                <EducationCard key={idx} education={edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

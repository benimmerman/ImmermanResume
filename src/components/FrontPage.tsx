import type { FC } from "react";
import ProfilePic from "../../public/ProfilePic.jpg";
import ImmermanResumePDF from "../../public/ImmermanResume.pdf";
import {
  FaLinkedinIn,
  FaGithub,
  FaFilePdf,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ExperienceCard } from "./ExperienceCard";
import { professionalExperience } from "./Experience";
import { ProjectsCard } from "./ProjectsCard";
import { projects } from "./Projects";
import { EducationCard } from "./EducationCard";
import { education } from "./Education";
import { MenuBanner } from "./MenuBanner";

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

const sections = [
  "About",
  "Experience",
  "Projects",
  "Education & Certifications",
];

const FrontPage: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen overflow-y-scroll scroll-smooth sm:overflow-y-auto">
      {/* Left 1/3: Profile (static on desktop) */}
      <section
        id="profile"
        className="w-full sm:w-1/3 bg-gray-800 text-white flex flex-col justify-between items-center pt-24 pb-8 min-h-[100dvh]
                    sm:fixed sm:top-0 sm:left-0 sm:h-[100dvh]"
      >
        {/* Main profile content */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[400px] mx-auto">
          <div className="flex items-center justify-center w-full">
            <img
              src={ProfilePic}
              className="w-[175px] h-[175px] sm:w-[225px] sm:h-[225px] rounded-full object-cover shadow-md"
              alt="Benjamin Immerman"
            />
          </div>
          <h1 className="mt-6 sm:mt-8 text-2xl sm:text-4xl font-bold text-center">
            Benjamin Immerman
          </h1>
          <div className="mt-2 sm:mt-2 text-xl sm:text-2xl font-semibold text-center">
            Software Engineer
          </div>
          <div className="mt-6 sm:mt-6 flex flex-col gap-2 w-full items-center">
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
        <div className="w-full max-w-[400px] mx-auto mt-8 mb-16 sm:mb-0">
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
      </section>

      {/* Right 2/3: Content */}
      <div className="flex flex-col w-full sm:overflow-y-auto sm:ml-[33.333333%]">
        {/* about */}
        <section
          id="about"
          className="min-h-screen sm:min-h-auto bg-gray-800 sm:bg-gray-800/95 h-auto text-white "
        >
          <div className="w-full flex items-start justify-center ">
            <div className="px-4 sm:px-8 sm:pb-8 sm:py-8 w-full">
              <div className="sm:top-0 py-2 ">
                <h2 className="text-2xl font-bold px-2 sm:px-0">
                  {sections[0]}
                </h2>
              </div>
              <p className="mb-3 px-2 sm:px-0">
                Former Mechanical Engineer turned Software Developer, focused on
                building responsive web apps and scalable cloud solutions.
                Strong foundation in engineering principles with
                systems-thinking approach and sharp problem-solving skills.
                Experienced in translating complex requirements into efficient,
                maintainable code.
              </p>
              <p className="mb-3 px-2 sm:px-0">
                Skilled in Agile environments—contributing across the stack: API
                design, cloud infrastructure, frontend development, and
                stakeholder engagement.
              </p>
              <p className="mb-3 px-2 sm:px-0">
                Outside of work I enjoy reading, drawing, going to the gym,
                Georgia Tech athletics, and Central Park with friends on sunny
                days.
              </p>
            </div>
          </div>
        </section>

        {/* experience */}
        <section
          id="experience"
          className="bg-gray-800 sm:bg-gray-800/95 text-white pb-4"
        >
          <div className="w-full flex items-start justify-center ">
            <div className="px-4 sm:px-8 w-full">
              <div className="sm:top-0 py-2 ">
                <h2 className="text-2xl font-bold px-2 sm:px-0">
                  {sections[1]}
                </h2>
              </div>
              {professionalExperience.map((exp, idx) => (
                <ExperienceCard key={idx} experience={exp} />
              ))}
            </div>
          </div>
        </section>

        {/* projects */}
        <section
          id="projects"
          className="min-h-screen sm:min-h-auto  bg-gray-800 sm:bg-gray-800/95 text-white pb-4"
        >
          <div className="w-full flex items-start justify-center ">
            <div className="px-4 sm:px-8 w-full">
              <div className="sm:top-0 py-2">
                <h2 className="text-2xl font-bold px-2 sm:px-0">
                  {sections[2]}
                </h2>
              </div>
              <div className="flex flex-wrap gap-16 justify-center mt-4">
                {projects.map((project, idx) => (
                  <ProjectsCard key={idx} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* education and certifications*/}
        <section
          id="education"
          className="min-h-screen sm:min-h-auto bg-gray-800 sm:bg-gray-800/95 text-white pt-8 pb-24"
        >
          <div className="w-full flex items-start justify-center ">
            <div className="px-4 sm:px-8 w-full">
              <div className="py-2">
                <h2 className="text-2xl font-bold px-2 sm:px-0">
                  {sections[3]}
                </h2>
              </div>
              {education.map((edu, idx) => (
                <EducationCard key={idx} education={edu} />
              ))}
            </div>
          </div>
        </section>

        {/* Menu Banner */}
        <div className="fixed bottom-0 w-full sm:hidden">
          <MenuBanner />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

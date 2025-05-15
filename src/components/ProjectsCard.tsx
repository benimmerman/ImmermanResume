import React, { useState, type FC } from "react";
import { LinkIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export interface ProjectBullet {
  text: string;
}

export interface ProjectLinks {
  link: string;
  name: string;
}

export interface Projects {
  name: string;
  bullets: ProjectBullet[];
  links: ProjectLinks[];
  skills: string[];
  image: string;
}

export interface ProjectsCardProps {
  project: Projects;
}

export const ProjectsCard: FC<ProjectsCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col justify-between bg-gray-600 rounded-xl shadow-lg p-4 sm:p-4 w-full sm:w-[70%] md:w-[40%] mb-4 min-h-[400px] transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.025]">
      {/* top section*/}
      <div className="flex flex-col justify-start">
        {/* Project Name */}
        <div className="flex flex-row sm:items-center sm:justify-between">
          <div className="hover:text-trackly hover:underline flex items-center gap-1">
            {project.links[0].link ? (
              <>
                <a
                  href={project.links[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-lg"
                >
                  {project.name}
                </a>
                <ArrowUpRightIcon className="w-4 h-4" />
              </>
            ) : (
              <span className="font-semibold text-lg">{project.name}</span>
            )}
          </div>
        </div>

        {/* Repositories */}
        <div className="mb-4">
          <div className="flex flex-wrap  gap-x-2 gap-y-1">
            {/* Label */}
            <span className="text-sm text-gray-400 underline decoration-transparent shrink-0">
              Repositories:
            </span>

            {/* Links container */}
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 min-w-0">
              {project.links.slice(1).map((link, index) => (
                <React.Fragment key={index}>
                  <span className="flex items-center gap-1 text-gray-400 hover:text-trackly hover:underline">
                    <LinkIcon className="w-4 h-4" />
                    <a
                      className="text-sm truncate"
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* App Image - Compact View */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            !isExpanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden w-[80%] mx-auto">
            <img
              src={project.image}
              alt={project.name}
              onClick={() => {
                if (project.links[0].link) {
                  window.open(project.links[0].link, "_blank");
                }
              }}
              className="w-full h-full object-cover hover:cursor-pointer"
            />
          </div>
        </div>

        {/* Project Description - Expanded View */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isExpanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul
              className={`list-disc text-sm pl-4 space-y-2 mt-2 transition-all duration-300 ease-in-out ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
            >
              {project.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet.text}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills Tags and Show More Button Container */}
        <div className="flex flex-wrap gap-2 w-full sm:gap-3 mt-6">
          {project.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue hover:bg-blue/80 text-white px-4 py-1 rounded-full text-xs font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* bottom section */}
      {/* Expand/Collapse Button */}
      <div className="flex justify-end w-full mt-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 hover:cursor-pointer text-white/80 hover:text-white/70 font-semibold text-sm self-end mt-1"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUpIcon className="w-4 h-4" />
            </>
          ) : (
            <>
              Show More <ChevronDownIcon className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

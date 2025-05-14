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
  description: string;
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
    <div className="bg-gray-600 rounded-xl shadow-lg p-4 sm:p-6 w-full sm:w-[48%] mb-4 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.025]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="hover:text-trackly hover:underline flex items-center gap-1">
          {project.links[0].link ? (<>
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
      <div className="flex items-center gap-1 mb-4">
        <span className="text-sm text-gray-400 underline underline-offset-2 decoration-transparent">
          Repositories:
        </span>
        {project.links.slice(1).map((link, index, arr) => (
          <React.Fragment key={index}>
            <span className="flex items-center gap-1 text-gray-400 hover:text-trackly hover:underline">
              <LinkIcon className="w-4 h-4" />
              <a
                className="text-sm"
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            </span>
            {index < arr.length - 1 && (
              <span className="text-gray-500">&middot;</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* App Image - Compact View */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          !isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden w-[90%] mx-auto">
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

      <div className="flex flex-wrap gap-2 sm:gap-4 mt-6">
        {project.skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue hover:bg-blue/80 text-white px-4 py-1 rounded-full text-xs font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Expand/Collapse Button */}
      <div className="flex justify-between w-full">
        <div className="flex mt-2 justify-end w-full">
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
    </div>
  );
};

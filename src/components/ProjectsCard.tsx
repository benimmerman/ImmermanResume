import React, { type FC } from "react";
import { LinkIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

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
}

export interface ProjectsCardProps {
  project: Projects;
}

export const ProjectsCard: FC<ProjectsCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-600 rounded-xl shadow-lg p-4 sm:p-6 mx-auto w-full mb-8 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.025]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <span className="hover:text-trackly hover:underline flex items-center gap-1">
          <a
            href={project.links[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg"
          >
            {project.name}
          </a>
          <ArrowUpRightIcon className="w-4 h-4" />
        </span>
        <div className="flex items-center gap-1">
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
      </div>
      <ul className="list-disc text-sm pl-4 space-y-2 mt-2">
        {project.bullets.map((bullet, idx) => (
          <li key={idx}>{bullet.text}</li>
        ))}
      </ul>
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
    </div>
  );
};

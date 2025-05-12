import type { FC } from "react";

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
    <div className="bg-gray-700 rounded-xl shadow-lg p-4 sm:p-6 mx-auto w-full mb-8 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.025]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <span>
          <a
            href={project.links[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg text-white hover:text-trackly hover:underline"
          >
            {project.name}
          </a>
        </span>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-400 underline underline-offset-2 decoration-transparent">
            Repositories:
          </span>
          <a
            className="text-sm text-gray-400 hover:text-trackly hover:underline"
            href={project.links[1].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.links[1].name}
          </a>
          <span className="text-gray-500">&middot;</span>
          <a
            className="text-sm text-gray-400 hover:text-trackly hover:underline"
            href={project.links[2].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.links[2].name}
          </a>
        </div>
      </div>
      <ul className="list-disc text-sm pl-4 space-y-2 text-gray-300 mt-2">
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

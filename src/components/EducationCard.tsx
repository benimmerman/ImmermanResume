import type { FC } from "react";

export interface EducationLink {
  link: string;
  name: string;
}

export interface Education {
  name: string;
  degree: string;
  links: EducationLink[];
  skills: string[];
}

export interface EducationCardProps {
  education: Education;
  isLast?: boolean;
}

export const EducationCard: FC<EducationCardProps> = ({
  education,
  isLast,
}) => {
  return (
    <div
      className={`py-4 px-4 text-white transition-all duration-300 group ${
        isLast ? "" : "border-b border-gray-300"
      } hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-800 hover:to-transparent`}
    >
      <div>
        {education.links.length > 0 ? (
          <a
            href={education.links[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg group-hover:text-gt group-hover:underline"
          >
            {education.name}
          </a>
        ) : (
          <span className="font-semibold text-lg group-hover:text-white">
            {education.name}
          </span>
        )}
      </div>
      <div className="text-sm mt-1 group-hover:text-gray-300">
        {education.degree}
      </div>
    </div>
  );
};

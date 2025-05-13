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

export const EducationCard: FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="py-4 px-4">
      <div className="font-semibold text-lg">{education.name}</div>
      <div className="text-sm mt-1">{education.degree}</div>
    </div>
  );
};

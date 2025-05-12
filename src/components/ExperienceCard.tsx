import type { FC } from "react";

export interface ExperienceBullet {
  text: string;
  subBullets?: string[];
}

export interface ProfessionalExperience {
  role: string;
  location: string;
  time: string;
  bullets: ExperienceBullet[];
  skills: string[];
}

export interface ExperienceCardProps {
  experience: ProfessionalExperience;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-white/50 rounded-xl shadow-lg p-4 sm:p-6 mx-auto w-full mb-8 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.025]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <span className="font-semibold text-lg text-main">
          {experience.role}
        </span>
        <span className="text-sm text-gray-500">
          {experience.location} &middot; {experience.time}
        </span>
      </div>
      <ul className="list-disc text-sm pl-4 space-y-2 text-main mt-2">
        {experience.bullets.map((bullet, idx) => (
          <li key={idx}>
            {bullet.text}
            {bullet.subBullets && (
              <ul className="list-disc pl-6 space-y-1 text-sm text-main mt-2">
                {bullet.subBullets.map((sub, subIdx) => (
                  <li key={subIdx}>{sub}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-6">
        {experience.skills.map((item, idx) => (
          <span
            key={idx}
            className="bg-blue hover:bg-blue/80 text-white px-4 py-1 rounded-full text-xs font-semibold"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

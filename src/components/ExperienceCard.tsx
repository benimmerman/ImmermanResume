import type { FC } from "react";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export interface ExperienceBullet {
  text: string;
  subBullets?: string[];
}

export interface ProfessionalExperience {
  role: string;
  location: string;
  time: string;
  summary: string;
  bullets: ExperienceBullet[];
  skills: string[];
}

export interface ExperienceCardProps {
  experience: ProfessionalExperience;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/50 rounded-xl shadow-lg p-4 sm:p-6 mx-auto w-full mb-8 transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.025]">
      {/* Summary View */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isExpanded ? "mb-4" : ""
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-xl text-main">
            {experience.role}
          </span>
          <span className="text-sm text-gray-500">
            {experience.location} &middot; {experience.time}
          </span>
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            !isExpanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-4">{experience.summary}</div>
          </div>
        </div>

        {/* Expanded View */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isExpanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-4 border-t border-gray-200">
              <ul className="list-disc text-sm pl-4 space-y-2 text-main">
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
            </div>
          </div>
        </div>

        {/* Skills Tags and Show More Button Container */}
        <div className="flex justify-between w-full">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {experience.skills.map((item, idx) => (
              <span
                key={idx}
                className={`bg-blue hover:bg-blue/80 text-white px-4 rounded-full font-semibold transition-all duration-300 ${
                  isExpanded ? "py-1 text-xs" : "py-1.5 text-sm"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Expand/Collapse Button */}
          <div className="flex">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 hover:cursor-pointer text-blue hover:text-blue/80 font-semibold text-sm self-end -mt-1"
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
    </div>
  );
};

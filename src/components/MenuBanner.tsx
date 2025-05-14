import type { FC } from "react";
import {
  UserIcon,
  BriefcaseIcon,
  FolderIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import {
  UserIcon as SolidUserIcon,
  BriefcaseIcon as SolidBriefcaseIcon,
  FolderIcon as SolidFolderIcon,
  AcademicCapIcon as SolidAcademicCapIcon,
} from "@heroicons/react/24/solid";

import { useScrollSpy } from "../hooks/useScrollSpy";

const menuItems = [
  {
    solidIcon: <SolidUserIcon className="w-7 h-7" />,
    icon: <UserIcon className="w-7 h-7" />,
    label: "Profile",
    href: "#profile",
  },
  {
    solidIcon: <SolidBriefcaseIcon className="w-7 h-7" />,
    icon: <BriefcaseIcon className="w-7 h-7" />,
    label: "Experience",
    href: "#experience",
  },
  {
    solidIcon: <SolidFolderIcon className="w-7 h-7" />,
    icon: <FolderIcon className="w-7 h-7" />,
    label: "Projects",
    href: "#projects",
  },
  {
    solidIcon: <SolidAcademicCapIcon className="w-7 h-7" />,
    icon: <AcademicCapIcon className="w-7 h-7" />,
    label: "Education",
    href: "#education",
  },
];

const sectionIds = menuItems.map((item) => item.href.replace("#", ""));

export const MenuBanner: FC = () => {
  const activeSection = useScrollSpy(sectionIds, 0);

  return (
    <>
      <div className="px-7 bg-gray-600/70 backdrop-blur-xs shadow-lg pb-2">
        <div className="flex justify-center">
          {menuItems.map((item) => {
            const isActive = item.href.replace("#", "") === activeSection;
            console.log(["activeSection", activeSection]);
            console.log(["item href", item.href.replace("#", "")]);
            return (
              <div className="flex-1 group">
                <a
                  href={item.href}
                  className={`flex flex-col items-center justify-center px-4 pt-2 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  <span>{isActive ? item.solidIcon : item.icon}</span>
                  <span className="text-sm mt-1">{item.label}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

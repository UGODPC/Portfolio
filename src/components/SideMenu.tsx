// src/components/SideMenu.tsx
import React from 'react';

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    githubLink: string;
    resources: string[];
    softSkills: string[];
  } | null;
};

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
      <button
        onClick={onClose}
        className="text-red-500 font-bold mb-4"
      >
        ✕ Fermer
      </button>
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="mb-4">{project.description}</p>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mb-4 block"
      >
        Lien GitHub
      </a>
      <div className="mb-4">
        <h3 className="font-semibold">Ressources :</h3>
        <ul className="list-disc ml-5">
          {project.resources.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Soft skills :</h3>
        <ul className="list-disc ml-5">
          {project.softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;

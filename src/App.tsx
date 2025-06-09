// src/App.tsx
import React, { useState } from 'react';
import SideMenu from './components/SideMenu';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleProjectClick = () => {
    setSelectedProject({
      title: 'Mon super projet',
      description: 'Voici une description détaillée du projet.',
      githubLink: 'https://github.com/mon-projet',
      resources: ['React', 'TypeScript', 'TailwindCSS'],
      softSkills: ['Communication', 'Travail en équipe', 'Résolution de problèmes']
    });
    setIsMenuOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Mon Portfolio</h1>

      {/* Ton lien Voir le projet */}
      <a
        href="#"
        className="project-link text-blue-500 underline cursor-pointer text-lg"
        onClick={(e) => {
          e.preventDefault();
          handleProjectClick();
        }}
      >
        Voir le projet <i className="fas fa-arrow-right"></i>
      </a>

      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}

export default App;

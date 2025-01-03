import React, { useState } from 'react';
import { Globe, Mail, Linkedin, Code, Wrench, Settings, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const [language, setLanguage] = useState('en');
  
  const content = {
    en: {
      about: "Robotics Engineering student at Université de Sherbrooke, combining technical expertise with hands-on experience in mechanical design and robotics integration. Building advanced robotic systems while studying Robotics at USherbrooke. Skilled in SolidWorks, Python, ROS & manufacturing processes. Focus: innovative mechanical design, robotics systems optimization & practical automation solutions.",
      skills: {
        programming: ["C/C++", "Python", "ROS", "MATLAB/Simulink"],
        mechanical: ["SolidWorks", "3D Printing", "CNC Machining", "Sheet Metal Design"],
        robotics: ["Robot Programming", "System Integration", "Mobile Robotics", "Mechanical Design"],
        other: ["Project Management", "Technical Documentation", "Bilingual (FR/EN)", "Team Leadership"]
      },
      projects: [
        {
          title: "Quadruped Robot",
          description: "Complete mechanical design and system integration project. Led hardware design and electronic systems integration.",
          tags: ["Robotics", "Mechanical Design", "System Integration"]
        },
        {
          title: "Manufacturing Process Automation",
          description: "Led warehouse automation using Studio5000, managing cross-functional teams and implementing risk analysis.",
          tags: ["Automation", "Project Management", "Risk Analysis"]
        }
      ]
    },
    fr: {
      about: "Étudiant en génie robotique à l'Université de Sherbrooke, combinant expertise technique et expérience pratique en conception mécanique et intégration robotique. Focus sur l'innovation en conception mécanique et l'optimisation des systèmes robotiques.",
      skills: {
        programming: ["C/C++", "Python", "ROS", "MATLAB/Simulink"],
        mechanical: ["SolidWorks", "Impression 3D", "Usinage CNC", "Conception Tôlerie"],
        robotics: ["Programmation Robot", "Intégration Système", "Robotique Mobile", "Conception Mécanique"],
        other: ["Gestion de Projet", "Documentation Technique", "Bilingue (FR/EN)", "Leadership d'Équipe"]
      },
      projects: [
        {
          title: "Robot Quadrupède",
          description: "Conception mécanique complète et projet d'intégration système. Direction de la conception matérielle et de l'intégration électronique.",
          tags: ["Robotique", "Conception Mécanique", "Intégration Système"]
        },
        {
          title: "Automation de Processus Manufacturier",
          description: "Direction de l'automatisation d'entrepôt avec Studio5000, gestion d'équipes et analyse de risques.",
          tags: ["Automation", "Gestion de Projet", "Analyse de Risques"]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Hubert Houle</h1>
          <div className="flex gap-4">
            <button onClick={() => setLanguage(l => l === 'en' ? 'fr' : 'en')} 
                    className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-600">{content[language].about}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(content[language].skills).map(([category, skills]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  {category === 'programming' && <Code className="h-5 w-5" />}
                  {category === 'mechanical' && <Wrench className="h-5 w-5" />}
                  {category === 'robotics' && <Settings className="h-5 w-5" />}
                  {category === 'other' && <BookOpen className="h-5 w-5" />}
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <ul className="space-y-2">
                  {skills.map(skill => (
                    <li key={skill} className="text-gray-600">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content[language].projects.map(project => (
              <div key={project.title} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
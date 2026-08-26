import { useParams, Link } from 'react-router-dom';
import teamData from '../data/team-data.json';
import Carousel from '../components/Carousel';
import SocialLinks from '../components/SocialLinks';

const STACKS = {
  react: { label: 'React', src: '/img/stacks/react.svg' },
  node: { label: 'Node.js', src: '/img/stacks/node.svg' },
  aws: { label: 'AWS', src: '/img/stacks/aws.svg' },
  linux: { label: 'Linux', src: '/img/stacks/linux.svg' },
  security: { label: 'Security', src: '/img/stacks/security.svg' },
  angular: { label: 'Angular', src: '/img/stacks/angular.svg' },
  javascript: { label: 'JavaScript', src: '/img/stacks/javascript.svg' },
  css: { label: 'CSS', src: '/img/stacks/css.svg' },
  hardware: { label: 'Hardware', src: '/img/stacks/hardware.svg' },
  architecture: { label: 'Arquitectura', src: '/img/stacks/architecture.svg' },
  cypress: { label: 'Cypress', src: '/img/stacks/cypress.svg' },
  jest: { label: 'Testing / QA', src: '/img/stacks/jest.svg' },
  n8n: { label: 'n8n', src: '/img/stacks/n8n.svg' },
  jira: { label: 'Jira', src: '/img/stacks/jira.svg' },
};

export default function Perfil() {
  const { id } = useParams();

  const member = teamData.find((teamMember) => String(teamMember.id) === id) || teamData[0];

  const renderTechIcon = (stackCode) => {
    switch (stackCode) {
      case 'react':
      case 'node':
      case 'aws':
      case 'linux':
      case 'security':
      case 'angular':
      case 'javascript':
      case 'css':
      case 'hardware':
      case 'architecture':
      case 'cypress':
      case 'jest':
      case 'n8n':
      case 'jira': {
        const stack = STACKS[stackCode];

        return (
          <div className="tech-icon" key={stackCode}>
            <img className="tech-icon-img" src={stack.src} alt="" width="18" height="18" />
            <span>{stack.label}</span>
          </div>
        );
      }
      default:
        return null;
    }
  };


  return (
    <section className="perfil-page fade-in">
      <Link to="/equipo" className="back-link">⬅ Volver al equipo</Link>

      <header className="perfil-hero">
        <img className="perfil-avatar" src={member.avatar} alt={member.name} />
        <div>
          <p className="empresa-eyebrow">Integrante</p>
          <h1 className="perfil-hero-name">{member.name}</h1>
          <p className="perfil-hero-role">{member.role}</p>
        </div>
      </header>

      {/* Caja 'Sobre mí' específica del perfil */}
      <div className="empresa-pillar mt-1">
        <h3>Sobre mí</h3>
        <p>{member.about || member.description}</p>
      </div>

      <div className="perfil-grid">
        {/* 1. Barras de Progreso */}
        <div className="card-panel">
          <h3 className='mb-1'>Habilidades</h3>
          {member.skills.map((skill, index) => (
            <div className="skill" key={index}>
              <span>{skill.name}</span>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Tech Stack e Iconografía */}
        <div className="card-panel">
          <h3 className="mb-1">Tech Stack</h3>
          <div className="icons-grid">
            {member.codes.map(renderTechIcon)}
          </div>
        </div>

        {/* 3. Redes Sociales (Componente) */}
        <SocialLinks github={member.github} linkedin={member.linkedin} />
      </div>

      {/* 4. Carrusel de Proyectos (Componente) */}
      <div className="card-panel mt-2">
        <h3 className="mb-1">Proyectos Destacados</h3>
        {/* Le pasamos la data del integrante actual por prop */}
        <Carousel projects={member.projects} />
      </div>
    </section>
  );
}
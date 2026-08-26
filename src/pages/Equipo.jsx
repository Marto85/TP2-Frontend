import MemberCard from '../components/MemberCard';
import teamData from '../data/team-data.json';

export default function Equipo() {
  return (
    <section id="integrantes" className="equipo-page fade-in">
      <header className="equipo-header">
        <p className="empresa-eyebrow">Organización interna</p>
        <h1 className="empresa-title empresa-title--light">
          Nuestro<span>Equipo</span>
        </h1>
        <p className="equipo-tagline">
          Las personas que traducen ideas en soluciones reales para cada cliente.
        </p>
      </header>

      <div className="grid-container">
        {teamData.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

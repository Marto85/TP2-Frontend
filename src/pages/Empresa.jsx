import { Link } from 'react-router-dom';

const VALORES = ['Integridad', 'Humanidad', 'Perseverancia', 'Cortesía', 'Calidad', 'Simplicidad'];

const METAS = [
  { plazo: 'Corto plazo', texto: 'Aumentar cartera de clientes.' },
  { plazo: 'Mediano plazo', texto: 'Posicionarse como punto de referencia.' },
  { plazo: 'Largo plazo', texto: 'Consolidarse como marca de soluciones y expandirse a nuevos mercados.' },
];

export default function Empresa() {
  return (
    <section className="empresa-page fade-in">
      <header className="empresa-hero">
        <span className="empresa-watermark" aria-hidden="true">TT</span>
        <p className="empresa-eyebrow">Presentación institucional</p>
        <h1 className="empresa-title">
          Talento<span>Tech</span>
        </h1>
        <p className="empresa-tagline">
          Hablamos el mismo idioma que vos. Software claro, accesible y hecho a medida para tu negocio.
        </p>
        <dl className="empresa-contact">
          <div>
            <dt>Contacto</dt>
            <dd>info@talentotech.com</dd>
          </div>
          <div>
            <dt>Representante</dt>
            <dd>Nico</dd>
          </div>
        </dl>
      </header>

      <div className="empresa-duo">
        <article className="empresa-pillar">
          <h3>Misión</h3>
          <p>
            Generar software accesible y de calidad, enfocado en soluciones, hablando el mismo
            lenguaje que el cliente.
          </p>
        </article>
        <article className="empresa-pillar empresa-pillar--warm">
          <h3>Visión</h3>
          <p>Destacarnos como punto de referencia en software humanizado. Acercamos software.</p>
        </article>
      </div>

      <section className="empresa-block">
        <h2 className="empresa-block-title">Valores</h2>
        <ul className="empresa-values">
          {VALORES.map((valor) => (
            <li key={valor}>{valor}</li>
          ))}
        </ul>
      </section>

      <section className="empresa-block">
        <h2 className="empresa-block-title">Metas y objetivos</h2>
        <ol className="empresa-timeline">
          {METAS.map((meta) => (
            <li key={meta.plazo}>
              <span className="empresa-timeline-plazo">{meta.plazo}</span>
              <p>{meta.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="empresa-block empresa-editorial">
        <h2 className="empresa-block-title">Contexto y problemática</h2>
        <p>
          <strong>Contexto.</strong> La empresa se ubica en el rubro del desarrollo de software,
          ofreciendo soluciones a medida para pequeñas y medianas empresas (PyMEs). En la
          actualidad, muchas de estas empresas todavía gestionan sus operaciones de forma manual
          o con herramientas dispersas (planillas de cálculo, papel, aplicaciones que no se
          comunican entre sí). El mercado de la digitalización de PyMEs está en crecimiento, ya
          que cada vez más negocios buscan modernizarse para competir, pero no siempre encuentran
          soluciones accesibles y adaptadas a su realidad.
        </p>
        <p>
          <strong>Problemática.</strong> Muchas pequeñas y medianas empresas necesitan
          digitalizarse, pero se encuentran con una barrera importante: las empresas de software
          suelen comunicarse en un lenguaje técnico difícil de entender para quienes no son del
          rubro.
        </p>
      </section>

      <section className="empresa-block empresa-editorial">
        <h2 className="empresa-block-title">Justificación</h2>
        <p>
          <strong>Por qué es necesaria.</strong> Existe una gran cantidad de pequeñas y medianas
          empresas que necesitan digitalizarse pero no encuentran soluciones accesibles y
          adaptadas a su realidad. Talento Tech cubre ese vacío ofreciendo software simple,
          económico y pensado específicamente para el día a día de las PyMEs, acompañándolas en
          su proceso de modernización.
        </p>
        <p>
          <strong>Qué valor aporta.</strong> Permite a las PyMEs ahorrar tiempo automatizando
          tareas repetitivas. Centraliza la información para reducir errores y facilitar la toma
          de decisiones. Ofrece un producto accesible en precio y fácil de usar, sin la
          complejidad de los sistemas pensados para grandes empresas. Brinda acompañamiento y
          soporte cercano, algo que las grandes soluciones del mercado no suelen dar.
        </p>
        <p>
          <strong>Diferencial.</strong> Lo que distingue a Talento Tech es la combinación de
          soluciones a medida, precio accesible y atención personalizada. Mientras que las
          grandes plataformas ofrecen productos rígidos y caros, la empresa se adapta a las
          necesidades reales de cada cliente y lo acompaña de cerca, generando una relación de
          confianza a largo plazo.
        </p>
      </section>

      <section className="empresa-block empresa-cta-block">
        <h2 className="empresa-block-title">Organización interna</h2>
        <p>Conocé a las personas detrás de Talento Tech.</p>
        <Link to="/equipo" className="empresa-cta-btn">Conocé a nuestro equipo →</Link>
      </section>
    </section>
  );
}

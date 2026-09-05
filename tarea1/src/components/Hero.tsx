export default function Hero() {
  return (
    <section id="inicio" className="section hero" tabIndex={-1} aria-label="Inicio">
      <p className="hero__eyebrow">CV en línea</p>
      <h1 className="hero__name">Adán Juárez Jr.</h1>
      <p className="hero__role">
        Desarrollador de software · Ingeniería en Sistemas Computacionales, ITESO
      </p>
      <p className="hero__pitch">
        Construyo software a la medida para negocios que todavía llevan sus procesos en papel o en
        hojas de cálculo. Aplico al código la misma constancia con la que entreno para un maratón:
        avanzar en tramos medibles, sin saltarme pasos.
      </p>
      <div className="hero__actions">
        <a className="button button--primary" href="#proyectos">
          Ver proyectos
        </a>
        <a className="button button--ghost" href="#contacto">
          Contactarme
        </a>
      </div>
    </section>
  );
}
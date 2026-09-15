export default function About() {
  return (
    <section id="acerca" className="section about" tabIndex={-1} aria-labelledby="acerca-title">
      <h2 id="acerca-title" className="section__title">
        Acerca de
      </h2>
      <div className="about__content">
        <p>
          Soy estudiante de Ingeniería en Sistemas Computacionales en el ITESO, en Guadalajara. Además
          de las materias de la carrera, dirijo <strong>InnovaLabs</strong>, mi propio proyecto de
          desarrollo freelance: construyo software a la medida para negocios locales que necesitan
          digitalizar procesos que hoy resuelven a mano.
        </p>
        <p>
          Me interesa tanto el código como el negocio detrás del código: prospecto clientes,
          preparo demostraciones, doy seguimiento a la parte fiscal del proyecto y, ya del lado
          técnico, diseño la arquitectura y la implemento de principio a fin.
        </p>
        <p>
          Fuera de la pantalla soy corredor de resistencia. Entrenar para medios maratones y
          maratones me enseñó a trabajar por bloques medibles y sostenidos en el tiempo, algo que
          también aplico cuando planeo un proyecto de software.
        </p>
      </div>
    </section>
  );
}
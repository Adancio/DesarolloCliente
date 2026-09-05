import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="proyectos" className="section projects" tabIndex={-1} aria-labelledby="proyectos-title">
      <h2 id="proyectos-title" className="section__title">
        Proyectos
      </h2>
      <ul className="projects__grid">
        {PROJECTS.map((project) => (
          <li key={project.id} className="project-card">
            <div className="project-card__header">
              <h3 className="project-card__name">{project.name}</h3>
              <span className={`status-pill status-pill--${statusModifier(project.status)}`}>
                {project.status}
              </span>
            </div>
            <p className="project-card__meta">
              {project.role} · {project.period}
            </p>
            <p className="project-card__description">{project.description}</p>
            <ul className="chip-list" aria-label={`Tecnologías usadas en ${project.name}`}>
              {project.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

function statusModifier(status: string): string {
  switch (status) {
    case "En producción":
      return "live";
    case "Completado":
      return "done";
    default:
      return "progress";
  }
}
import { SKILLS, EXPERIENCE } from "../data";

export default function TechExperience() {
  return (
    <section
      id="experiencia"
      className="section experience"
      tabIndex={-1}
      aria-labelledby="experiencia-title"
    >
      <h2 id="experiencia-title" className="section__title">
        Tecnologías y experiencia
      </h2>

      <div className="skills">
        {SKILLS.map((group) => (
          <div key={group.category} className="skills__group">
            <h3 className="skills__category">{group.category}</h3>
            <ul className="chip-list" aria-label={`Habilidades en ${group.category}`}>
              {group.skills.map((skill) => (
                <li key={skill} className="chip chip--mono">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ol className="timeline">
        {EXPERIENCE.map((item) => (
          <li key={item.id} className="timeline__item">
            <div className="timeline__heading">
              <h3 className="timeline__role">{item.role}</h3>
              <span className="timeline__period">{item.period}</span>
            </div>
            <p className="timeline__org">{item.org}</p>
            <ul className="timeline__bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
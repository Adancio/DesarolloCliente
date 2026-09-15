import { EDUCATION } from "../data";

export default function Education() {
  return (
    <section
      id="educacion"
      className="section education"
      tabIndex={-1}
      aria-labelledby="educacion-title"
    >
      <h2 id="educacion-title" className="section__title">
        Educación
      </h2>
      <ul className="education__list">
        {EDUCATION.map((item) => (
          <li key={item.id} className="education-card">
            <div className="education-card__heading">
              <h3 className="education-card__program">{item.program}</h3>
              <span className="education-card__period">{item.period}</span>
            </div>
            <p className="education-card__institution">{item.institution}</p>
            <ul className="education-card__details">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
import { HOBBIES } from "../data";

export default function Hobbies() {
  return (
    <section id="hobbies" className="section hobbies" tabIndex={-1} aria-labelledby="hobbies-title">
      <h2 id="hobbies-title" className="section__title">
        Hobbies
      </h2>
      <ul className="hobbies__list">
        {HOBBIES.map((hobby) => (
          <li key={hobby.id} className="hobby-card">
            <h3 className="hobby-card__title">{hobby.title}</h3>
            <p className="hobby-card__description">{hobby.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
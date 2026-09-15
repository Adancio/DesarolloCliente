import { NAV_SECTIONS } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";

export default function RulerNav() {
  const ids = NAV_SECTIONS.map((s) => s.id);
  const activeId = useActiveSection(ids);

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    el?.focus({ preventScroll: true });
  };

  return (
    <nav className="ruler-nav" aria-label="Navegacion de secciones del CV">
      <ol className="ruler-nav__track">
        {NAV_SECTIONS.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id} className={`ruler-nav__mark${section.major ? " ruler-nav__mark--major" : ""}${isActive ? " ruler-nav__mark--active" : ""}`}>
              <a href={`#${section.id}`} onClick={handleClick(section.id)} aria-current={isActive ? "true" : undefined}>
                <span className="ruler-nav__tick" aria-hidden="true" />
                <span className="ruler-nav__label">
                  {section.major && section.mark !== undefined ? `${section.mark}cm ` : ""}
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
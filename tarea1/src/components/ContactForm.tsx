import { useId, useState } from "react";
import type { FormEvent } from "react";
import type { ContactFormData } from "../types";

const EMPTY_FORM: ContactFormData = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  function handleChange(
    field: keyof ContactFormData
  ): (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void {
    return (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Por favor llena los tres campos antes de enviar.");
      setSubmitted(false);
      return;
    }

    console.log("Formulario de contacto enviado:", formData);

    setError(null);
    setSubmitted(true);
  }

  function handleReset() {
    setFormData(EMPTY_FORM);
    setSubmitted(false);
    setError(null);
  }

  return (
    <section id="contacto" className="section contact" tabIndex={-1} aria-labelledby="contacto-title">
      <h2 id="contacto-title" className="section__title">
        Contacto
      </h2>
      <p className="contact__intro">
        ¿Tienes un proyecto en mente? Escríbeme un poco sobre lo que necesitas. Este formulario es
        una demostración: no envía los datos a ningún servidor, solo los registra en la consola.
      </p>

      {submitted ? (
        <div className="contact__confirmation" role="status">
          <p className="contact__confirmation-title">¡Mensaje recibido, {formData.name}!</p>
          <p>
            Esto es una simulación de envío: tus datos se registraron en la consola del navegador,
            no en un servidor real.
          </p>
          <button type="button" className="button button--ghost" onClick={handleReset}>
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor={nameId}>Nombre</label>
            <input
              id={nameId}
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange("name")}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor={emailId}>Correo electrónico</label>
            <input
              id={emailId}
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange("email")}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor={messageId}>Mensaje</label>
            <textarea
              id={messageId}
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange("message")}
              required
            />
          </div>

          {error && (
            <p className="contact__error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="button button--primary">
            Enviar mensaje
          </button>
        </form>
      )}
    </section>
  );
}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { document.title = "Contact — Fieldnotes"; }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(initialForm);
  };

  const goHome = () => {
    navigate("/");
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <div className="container">
      <header className="page-header">
        <span className="kicker">Contact</span>
        <h1>Say hello.</h1>
        <p>The fastest way to reach me is through this form, or by email at <a href="mailto:rajanshukla88503@gmail.com">rajanshukla88503@gmail.com</a>.</p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn" disabled={!isValid}>Send message</button>
      </form>

      {sent && (
        <div className="confirmation" role="status" aria-live="polite">
          <strong>Message sent.</strong>
          <p className="muted">Thanks for reaching out — I'll get back to you soon.</p>
          <button type="button" className="submit-btn" onClick={goHome} style={{ marginTop: "1rem" }}>
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
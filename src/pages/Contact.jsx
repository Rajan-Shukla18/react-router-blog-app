import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Contact — Fieldnotes";
  }, []);

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

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.message.trim();

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <header className="mb-12">
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.08em] text-accent">
          Contact
        </span>

        <h1 className="font-serif text-5xl font-medium leading-tight text-text">
          Say hello.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          The fastest way to reach me is through this form, or by email at{" "}
          <a
            href="mailto:rajanshukla88503@gmail.com"
            className="text-accent hover:underline"
          >
            rajanshukla88503@gmail.com
          </a>
          .
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-muted"
          >
            Your name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-lg border border-border bg-surface px-4 py-3 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-muted"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-lg border border-border bg-surface px-4 py-3 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-muted"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="min-h-[140px] resize-y rounded-lg border border-border bg-surface px-4 py-3 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
          />
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className="w-fit rounded-lg bg-text px-6 py-3 font-semibold text-bg transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          Send message
        </button>
      </form>

      {sent && (
        <div
          role="status"
          aria-live="polite"
          className="mt-8 rounded-lg border border-border border-l-4 border-l-accent bg-surface p-5"
        >
          <strong className="mb-2 block font-serif text-lg font-medium text-text">
            Message sent.
          </strong>

          <p className="text-muted">
            Thanks for reaching out — I'll get back to you soon.
          </p>

          <button
            type="button"
            onClick={goHome}
            className="mt-4 rounded-lg bg-text px-6 py-3 font-semibold text-bg transition hover:bg-black"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
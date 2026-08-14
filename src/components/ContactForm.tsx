import { motion } from 'motion/react';
import { useState, type FormEvent } from 'react';

import { CONTACT_EMAIL } from '../constants';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = `Contact via redar.fr — ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setOpened(true);
  };

  if (opened) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-start gap-4 py-8"
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
          style={{ background: 'linear-gradient(135deg, #5c33cc, #33c2cc)' }}
        >
          ✉
        </div>
        <p className="text-lg font-semibold">Ton client mail va s&apos;ouvrir</p>
        <p className="subtext text-sm">
          Le message est pré-rempli avec ce que tu as écrit — il ne reste qu&apos;à
          l&apos;envoyer depuis ton client mail.
        </p>
        <button
          onClick={() => {
            setOpened(false);
            setForm({ name: '', email: '', message: '' });
          }}
          className="text-sm text-lavender underline underline-offset-2 cursor-pointer"
        >
          Revenir au formulaire
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="field-label text-neutral-400 block mb-1"
          >
            Nom
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Marie Dupont"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="field-input field-input-focus"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="field-label text-neutral-400 block mb-1"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="marie@exemple.fr"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="field-input field-input-focus"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="field-label text-neutral-400 block mb-1"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Décrivez votre projet, votre mission ou votre besoin…"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="field-input field-input-focus resize-none"
        />
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <p className="subtext text-xs max-w-xs">
          Basé à Beauvais — disponible en freelance dans l&apos;Oise, les Hauts-de-France
          et à distance.
        </p>
        <button
          type="submit"
          className="btn group relative overflow-hidden"
          style={{ width: 'auto', padding: '12px 28px' }}
        >
          <span className="relative z-10">Envoyer →</span>
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, #5c33cc, #33c2cc)' }}
          />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

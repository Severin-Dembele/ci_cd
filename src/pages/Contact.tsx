import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Layout from '../components/Layout';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitMessage('Veuillez remplir tous les champs');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitMessage('Veuillez entrer une adresse email valide');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Message envoyé avec succès !');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 3000);
    }, 1000);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1>Nous Contacter</h1>
          <p>Vous avez des questions ? N'hésitez pas à nous envoyer un message</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              {/* Email */}
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>contact@promotion2024.fr</p>
                  <span>Nous répondons généralement sous 24 heures</span>
                </div>
              </div>

              {/* Phone */}
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Téléphone</h3>
                  <p>+33 (0) 1 23 45 67 89</p>
                  <span>Lun - Ven, 9h - 18h</span>
                </div>
              </div>

              {/* Address */}
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3>Adresse</h3>
                  <p>
                    École Supérieure<br />
                    123 Avenue de l'Université<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Nom Complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Adresse Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={6}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-submit"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le Message
                    </>
                  )}
                </button>

                {/* Submit Message */}
                {submitMessage && (
                  <p className={`submit-message ${submitMessage.includes('succès') ? 'success' : 'error'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="map-section">
        <div className="container">
          <h2>Nous Localiser</h2>
          <div className="map-placeholder">
            <MapPin size={64} />
            <p>Carte interactive à venir</p>
            <span>École Supérieure, 123 Avenue de l'Université, Paris</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Users, Image, Mail } from 'lucide-react';
import Layout from '../components/Layout';
import './Home.css';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content animate-slide-in-left">
              <div className="hero-badge">Promotion 2024-2025</div>
              <h1>Bienvenue à la <span className="text-primary">Promotion</span></h1>
              <p>Découvrez nos étudiants talentueux, nos projets innovants et notre communauté dynamique. Une promotion d'exception.</p>

              {/* CTA Buttons */}
              <div className="hero-buttons">
                <Link to="/etudiants" className="btn btn-primary">
                  Découvrir les Étudiants
                  <ArrowRight size={20} />
                </Link>
                <Link to="/galerie" className="btn btn-outline">
                  Voir la Galerie
                </Link>
              </div>

              {/* Stats */}
              <div className="hero-stats">
                <div className="stat">
                  <p className="stat-number">150+</p>
                  <p className="stat-label">Étudiants</p>
                </div>
                <div className="stat">
                  <p className="stat-number">50+</p>
                  <p className="stat-label">Projets</p>
                </div>
                <div className="stat">
                  <p className="stat-number">100%</p>
                  <p className="stat-label">Engagement</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hero-visual">
              <div className="hero-visual-inner">
                <Users size={40} />
                <p>Une Communauté Exceptionnelle</p>
                <span>Rejoignez nos étudiants dans une aventure académique unique</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-header">
            <h2>Explorez Notre Promotion</h2>
            <p>Découvrez les différentes facettes de notre communauté académique</p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <Link to="/etudiants" className="feature-card hover-lift">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <h3>Nos Étudiants</h3>
              <p>Rencontrez les 150+ étudiants talentueux de notre promotion avec leurs profils détaillés.</p>
              <span className="feature-link">
                Découvrir <ArrowRight size={16} />
              </span>
            </Link>

            {/* Feature 2 */}
            <Link to="/galerie" className="feature-card hover-lift">
              <div className="feature-icon">
                <Image size={24} />
              </div>
              <h3>Galerie Photos</h3>
              <p>Parcourez nos plus beaux moments et événements capturés au fil de l'année.</p>
              <span className="feature-link">
                Voir les photos <ArrowRight size={16} />
              </span>
            </Link>

            {/* Feature 3 */}
            <Link to="/contact" className="feature-card hover-lift">
              <div className="feature-icon">
                <Mail size={24} />
              </div>
              <h3>Nous Contacter</h3>
              <p>Vous avez des questions ? Contactez-nous directement pour plus d'informations.</p>
              <span className="feature-link">
                Envoyer un message <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à Découvrir Notre Promotion ?</h2>
            <p>Explorez nos profils, nos projets et nos événements pour mieux connaître notre communauté académique.</p>
            <Link to="/etudiants" className="btn btn-light">
              Commencer l'Exploration
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Layout.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Étudiants', path: '/etudiants' },
    { label: 'Galerie', path: '/galerie' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="layout">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-badge">PC</div>
            <span className="logo-text">Promotion 2024</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* About */}
            <div className="footer-section">
              <h3>Promotion 2024-2025</h3>
              <p>Découvrez notre promotion exceptionnelle et ses membres talentueux.</p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Liens Rapides</h3>
              <ul>
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li>Email: contact@promotion2024.fr</li>
                <li>Téléphone: +33 (0) 1 23 45 67 89</li>
                <li>Adresse: École Supérieure, Paris</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-bottom">
            <p>© 2024 Promotion de Classe. Tous droits réservés.</p>
            <div className="footer-links">
              <a href="#">Mentions Légales</a>
              <a href="#">Politique de Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

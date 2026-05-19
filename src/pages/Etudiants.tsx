import { useState } from 'react';
import { Search, Mail, Linkedin } from 'lucide-react';
import Layout from '../components/Layout';
import './Etudiants.css';

interface Student {
  id: number;
  name: string;
  specialization: string;
  bio: string;
  email: string;
  linkedin?: string;
}

const STUDENTS: Student[] = [
  {
    id: 1,
    name: 'BOLY Izdine ',
    specialization: 'Informatique',
    bio: 'Passionnée par le développement web et l\'IA',
    email: 'alice.martin@example.com',
    linkedin: 'linkedin.com/in/alice-martin',
  },
  {
    id: 2,
    name: 'Baptiste Dupont',
    specialization: 'Gestion',
    bio: 'Spécialiste en stratégie d\'entreprise',
    email: 'baptiste.dupont@example.com',
    linkedin: 'linkedin.com/in/baptiste-dupont',
  },
  {
    id: 3,
    name: 'Claire Rousseau',
    specialization: 'Informatique',
    bio: 'Experte en cybersécurité et cloud computing',
    email: 'claire.rousseau@example.com',
    linkedin: 'linkedin.com/in/claire-rousseau',
  },
  {
    id: 4,
    name: 'David Lefevre',
    specialization: 'Marketing',
    bio: 'Créatif et innovant dans les stratégies digitales',
    email: 'david.lefevre@example.com',
    linkedin: 'linkedin.com/in/david-lefevre',
  },
  {
    id: 5,
    name: 'Émilie Garnier',
    specialization: 'Informatique',
    bio: 'Développeuse full-stack avec passion pour le design',
    email: 'emilie.garnier@example.com',
    linkedin: 'linkedin.com/in/emilie-garnier',
  },
  {
    id: 6,
    name: 'Florian Moreau',
    specialization: 'Gestion',
    bio: 'Entrepreneur en herbe, passionné par l\'innovation',
    email: 'florian.moreau@example.com',
    linkedin: 'linkedin.com/in/florian-moreau',
  },
 Asael-nitiema
  {
    id: 7,
    name: 'Asael nitiema',
    specialization: 'informatique',
    bio: 'Développeur full-stack avec passion pour le design',
    email: 'asaelnitiema@example.com',
    linkedin: 'linkedin.com/in/asael-nitiema',

    {
    id: 8,
    name: 'Mare Stephane Nathanaël',
    specialization: 'Informatique',
    bio: 'Passionnée par la finance et l\'IA',
    email: 'maresteph06@gmail.com',
    linkedin: 'https://www.linkedin.com/in/st%C3%A9phane-nathana%C3%ABl-mare-4a302633b/',
 main
  },
];

const SPECIALIZATIONS = ['Tous', 'Informatique', 'Gestion', 'Marketing'];

export default function Etudiants() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('Tous');

  const filteredStudents = STUDENTS.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization =
      selectedSpecialization === 'Tous' ||
      student.specialization === selectedSpecialization;
    return matchesSearch && matchesSpecialization;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1>Nos Étudiants</h1>
          <p>Rencontrez les {STUDENTS.length} étudiants talentueux de notre promotion</p>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          {/* Search */}
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Rechercher un étudiant..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Specialization Filter */}
          <div className="filter-buttons">
            {SPECIALIZATIONS.map((spec) => (
              <button
                key={spec}
                className={`filter-btn ${selectedSpecialization === spec ? 'active' : ''}`}
                onClick={() => setSelectedSpecialization(spec)}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="results-count">
            {filteredStudents.length} étudiant{filteredStudents.length !== 1 ? 's' : ''} trouvé{filteredStudents.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Students Grid */}
      <section className="students-section">
        <div className="container">
          {filteredStudents.length > 0 ? (
            <div className="students-grid">
              {filteredStudents.map((student) => (
                <div key={student.id} className="student-card hover-lift">
                  {/* Avatar */}
                  <div className="student-avatar">
                    <div className="avatar-circle">{student.name.charAt(0)}</div>
                  </div>

                  {/* Content */}
                  <div className="student-content">
                    <h3>{student.name}</h3>
                    <p className="specialization">{student.specialization}</p>
                    <p className="bio">{student.bio}</p>

                    {/* Contact Links */}
                    <div className="contact-links">
                      <a href={`mailto:${student.email}`} className="contact-btn email">
                        <Mail size={16} />
                        <span>Email</span>
                      </a>
                      {student.linkedin && (
                        <a
                          href={`https://${student.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-btn linkedin"
                        >
                          <Linkedin size={16} />
                          <span>LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>Aucun étudiant ne correspond à votre recherche.</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSpecialization('Tous');
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

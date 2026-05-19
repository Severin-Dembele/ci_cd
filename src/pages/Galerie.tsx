import { useState } from 'react';
import { X } from 'lucide-react';
import Layout from '../components/Layout';
import './Galerie.css';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: 'Cérémonie d\'Ouverture',
    category: 'Événements',
    description: 'Le début d\'une belle aventure académique',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    title: 'Projet Innovant',
    category: 'Projets',
    description: 'Nos étudiants en action sur un projet collaboratif',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 3,
    title: 'Conférence Inspirante',
    category: 'Événements',
    description: 'Une présentation captivante d\'un expert du secteur',
    color: 'from-pink-400 to-pink-600',
  },
  {
    id: 4,
    title: 'Travail en Équipe',
    category: 'Projets',
    description: 'Collaboration et échange d\'idées entre étudiants',
    color: 'from-green-400 to-green-600',
  },
  {
    id: 5,
    title: 'Présentation Finale',
    category: 'Événements',
    description: 'Les étudiants présentent leurs projets finaux',
    color: 'from-orange-400 to-orange-600',
  },
  {
    id: 6,
    title: 'Moment de Détente',
    category: 'Vie Étudiante',
    description: 'Pause conviviale entre les cours',
    color: 'from-cyan-400 to-cyan-600',
  },
];

const CATEGORIES = ['Tous', 'Événements', 'Projets', 'Vie Étudiante'];

export default function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === 'Tous'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <h1>Galerie Photos</h1>
          <p>Parcourez nos plus beaux moments et événements de l'année</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="filters-section">
        <div className="container">
          <div className="filter-buttons">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <div
                  className="gallery-image"
                  style={{
                    background: `linear-gradient(135deg, ${
                      image.color.includes('blue')
                        ? '#60A5FA, #3B82F6'
                        : image.color.includes('purple')
                        ? '#C084FC, #A855F7'
                        : image.color.includes('pink')
                        ? '#F472B6, #EC4899'
                        : image.color.includes('green')
                        ? '#4ADE80, #22C55E'
                        : image.color.includes('orange')
                        ? '#FB923C, #F97316'
                        : '#06B6D4, #0891B2'
                    })`,
                  }}
                >
                  <div className="gallery-overlay">
                    <p className="gallery-category">{image.category}</p>
                    <h3 className="gallery-title">{image.title}</h3>
                    <p className="gallery-desc">{image.description}</p>
                  </div>
                  <div className="gallery-hover">+</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <div
              className="lightbox-image"
              style={{
                background: `linear-gradient(135deg, ${
                  selectedImage.color.includes('blue')
                    ? '#60A5FA, #3B82F6'
                    : selectedImage.color.includes('purple')
                    ? '#C084FC, #A855F7'
                    : selectedImage.color.includes('pink')
                    ? '#F472B6, #EC4899'
                    : selectedImage.color.includes('green')
                    ? '#4ADE80, #22C55E'
                    : selectedImage.color.includes('orange')
                    ? '#FB923C, #F97316'
                    : '#06B6D4, #0891B2'
                })`,
              }}
            />

            <div className="lightbox-details">
              <p className="lightbox-category">{selectedImage.category}</p>
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <button
                className="btn btn-primary"
                onClick={() => setSelectedImage(null)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

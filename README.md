# 🎓 Site Web Promotion de Classe 2024-2025

Un site web moderne et professionnel pour présenter votre promotion de classe, construit avec **React 18**, **Vite**, **React Router DOM** et **CSS personnalisé**.

## 📋 Contenu du Projet

Ce projet contient :

- **Architecture React moderne** avec structure standard
- **Navigation fluide** avec React Router DOM
- **Design minimaliste moderne** avec palette bleu électrique
- **Pages principales** :
  - Accueil avec hero section
  - Liste des étudiants avec filtres
  - Galerie photos avec lightbox
  - Formulaire de contact
  - Navigation et footer
- **Animations fluides** et transitions CSS personnalisées
- **Responsive design** (mobile, tablette, desktop)

## 🚀 Installation Rapide

### Prérequis

- Node.js 16+ (recommandé 18+)
- npm ou yarn

### Étapes d'Installation

```bash
# 1. Extraire l'archive ZIP
unzip promotion-classe-site.zip
cd promotion-classe-site

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# Le serveur sera accessible à http://localhost:5173
```

## 📁 Structure du Projet

```
promotion-classe-site/
├── src/
│   ├── pages/              # Pages principales
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── Etudiants.tsx
│   │   ├── Etudiants.css
│   │   ├── Galerie.tsx
│   │   ├── Galerie.css
│   │   ├── Contact.tsx
│   │   └── Contact.css
│   ├── components/         # Composants réutilisables
│   │   ├── Layout.tsx
│   │   └── Layout.css
│   ├── App.tsx            # Composant racine avec routage
│   ├── App.css
│   ├── index.css          # Styles globaux
│   └── main.tsx           # Point d'entrée
├── public/                # Fichiers statiques
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Personnalisation

### Modifier les Couleurs

Les couleurs sont définies dans `src/index.css` :

```css
:root {
  --primary: #0066FF;           /* Bleu électrique */
  --primary-dark: #0052CC;
  --background: #FFFFFF;        /* Blanc */
  --foreground: #1A1A1A;        /* Noir */
  /* ... autres couleurs */
}
```

### Ajouter des Étudiants

Modifiez le tableau `STUDENTS` dans `src/pages/Etudiants.tsx` :

```typescript
const STUDENTS: Student[] = [
  {
    id: 1,
    name: "Nom de l'Étudiant",
    specialization: "Domaine",
    bio: "Description courte",
    email: "email@example.com",
    linkedin: "linkedin.com/in/profil",
  },
  // Ajouter plus d'étudiants...
];
```

### Ajouter des Photos à la Galerie

Modifiez le tableau `GALLERY_IMAGES` dans `src/pages/Galerie.tsx` :

```typescript
const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: "Titre de la Photo",
    category: "Événements",
    description: "Description de la photo",
    color: "from-blue-400 to-blue-600",
  },
  // Ajouter plus de photos...
];
```

### Modifier les Informations de Contact

Mettez à jour les coordonnées dans `src/components/Layout.tsx` et `src/pages/Contact.tsx`.

## 🛠️ Scripts Disponibles

```bash
# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la build
npm run preview

# Vérifier le linting
npm run lint
```

## 📦 Build pour Production

```bash
# Créer une build optimisée
npm run build

# Tester la build localement
npm run preview
```

Les fichiers optimisés seront dans le dossier `dist/`.

## 🎯 Fonctionnalités Principales

### Page d'Accueil

La page d'accueil présente une hero section dynamique avec statistiques clés, trois cartes de présentation des sections principales, et des appels à l'action clairs pour explorer le site.

### Page Étudiants

Permet de rechercher et filtrer les étudiants par spécialisation. Chaque profil affiche le nom, la spécialisation, une biographie courte, et des liens de contact (email et LinkedIn).

### Page Galerie

Affiche les photos et événements dans une grille responsive avec filtrage par catégorie. Cliquer sur une image ouvre une lightbox modale avec plus de détails.

### Page Contact

Formulaire de contact fonctionnel avec validation, informations de contact détaillées (email, téléphone, adresse), et section de localisation.

## 🔧 Technologies Utilisées

- **React 18** : Framework UI moderne
- **Vite** : Bundler et serveur de développement ultra-rapide
- **React Router DOM** : Routage côté client
- **TypeScript** : Typage statique
- **Lucide React** : Icônes vectorielles
- **CSS Personnalisé** : Styles modulaires et maintenables

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour tous les appareils :

- **Mobile** : Optimisé pour les petits écrans avec navigation mobile
- **Tablette** : Layout adapté avec grilles flexibles
- **Desktop** : Expérience complète avec tous les éléments

## ♿ Accessibilité

Le projet respecte les standards d'accessibilité :

- Navigation au clavier complète
- Contraste de couleurs conforme WCAG
- Sémantique HTML correcte
- Attributs ARIA appropriés

## 🚀 Déploiement

Le projet peut être déployé sur plusieurs plateformes :

- **Vercel** : Déploiement automatique depuis GitHub
- **Netlify** : Connecter le repo GitHub
- **GitHub Pages** : Configuration Vite
- **Heroku** : Avec Node.js
- **Tout serveur statique** : Servir le dossier `dist/`

### Exemple de déploiement sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## 📝 Notes Importantes

1. **Polices Google** : Les polices Poppins et Inter sont chargées via Google Fonts (à ajouter dans `index.html` si nécessaire)
2. **Animations** : Les animations CSS sont optimisées pour les performances
3. **Thème** : Le site utilise un thème clair par défaut
4. **Données** : Les données des étudiants et photos sont en dur (à remplacer par une API si nécessaire)

## 🤝 Support et Maintenance

Pour modifier ou étendre le projet :

1. Consultez la documentation React : https://react.dev
2. React Router : https://reactrouter.com
3. Vite : https://vitejs.dev
4. Lucide React : https://lucide.dev

## 📄 Licence

Ce projet est libre d'utilisation et de modification.

---

**Créé avec ❤️ pour votre promotion de classe**

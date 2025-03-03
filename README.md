# 🎬 Movies-Track

Movies-Track est une application web développée avec Next.js qui permet de rechercher et d'explorer des films du monde entier grâce à l'API TMDB (The Movie Database).

## ✨ Fonctionnalités

- Recherche de films dans une base de données mondiale
- Affichage des détails des films (synopsis, casting, notes, etc.)
- Interface utilisateur moderne et responsive
- Navigation fluide entre les pages
- Utilisation de l'API TMDB pour des données à jour

## 🚀 Installation

```bash
# Clonez le repository
git clone https://github.com/noushiFlex/Movies-Track.git

# Accédez au dossier
cd Movies-Track

# Installez les dépendances
npm install
# ou
yarn install

# Configurez les variables d'environnement
# Créez un fichier .env.local avec votre clé API TMDB :
NEXT_PUBLIC_API_KEY=votre_clé_api

# Lancez le serveur de développement
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.

## 🔑 Configuration

Pour utiliser l'application, vous devez :
1. Créer un compte sur [TMDB](https://www.themoviedb.org/)
2. Obtenir une clé API dans vos paramètres de compte
3. Configurer la clé API dans le fichier .env.local en utilisant NEXT_PUBLIC_API_KEY comme nom de variable

## 🛠️ Technologies Utilisées

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS pour le styling
- [API TMDB](https://www.themoviedb.org/documentation/api) - Base de données de films
- Déploiement sur Vercel

## 📝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Suggérer de nouvelles fonctionnalités
- Proposer des améliorations
- Soumettre des pull requests

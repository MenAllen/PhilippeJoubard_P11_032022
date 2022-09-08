# Base de code du projet P11 - Parcours Front-end - React
Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Le site de l'agence Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Une refonte totale est décidée pour passer à une stack complète en JavaScript avec React côté Front-end.Il s'agit donc, sur la base des maquettes desktop et mobile fournies, de réaliser une app React Kasa qui présente:
 - Une page d'accueil présentant une liste de 20 logements. Chaque logement est cliquable et peut être vu de façon détaillée
 - Une page A propos décrivant les valeurs de l'agence

## Installation
 - git clone https://github.com/MenAllen/PhilippeJoubard_P11_032022.git
 - npm install pour installer l'application
 - npm start pour lancer l'application qui s'affiche sous localhost:3000

## Page netlify
Une page netlify est disponible sous : https://stellular-marshmallow-ca39e0.netlify.app/

## Inputs
 - Maquettes FIGMA Desktop et Mobile
 - Tableau JSON de 20 appartements avec description photos, points forts et rating

## Code
 - Main App: src\index.js qui inclue le routage vers les différentes pages
 - Pages: src\pages\Accueil.jsx, Apropos.jsx et Logements.jsx
 - Composants: src\components\Banner, Card, Carrousel, Dropdown, Error, Footer, Header, Pitch (jsx et css)

## Outils utilisés
 - React Create App
 - HTML, CSS, Javascript
 - ESlint Linter
 - Prettier Code formateur
 - Styled-Components
 - P42 code analyseur et amelioreur

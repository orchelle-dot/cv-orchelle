import React, { useRef, useState, useEffect } from 'react';
import './CV.css';
import Header from './Header';

const CV = () => {
  const audioRef = useRef(null);
  const [theme, setTheme] = useState('theme-light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const playAudio = (seconds) => {
    if (audioRef.current) {
      audioRef.current.currentTime = seconds;
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="theme-selector">
  <label>🎨 Thème : </label>
  <select onChange={(e) => setTheme(e.target.value)} value={theme}>
    <option value="theme-light">Clair</option>
    <option value="theme-dark">Sombre</option>
    <option value="theme-purple">Violet</option>
  </select>
</div>


      <Header />

      <Section title="Profil">
        <p>
          Étudiante en informatique passionnée et motivée, actuellement en niveau 2 à l'Université de Yaoundé 1.
          Je suis déterminée à acquérir des connaissances et des compétences solides en informatique pour poursuivre une carrière réussie dans ce domaine.
          Je suis une personne dynamique, curieuse et toujours prête à apprendre et à relever de nouveaux défis.
        </p>
      </Section>

      <Section title="Objectif Professionnel">
        <p>
          Obtenir un stage ou un emploi dans le domaine de l'informatique pour appliquer mes connaissances et développer mes compétences.
        </p>
      </Section>

      <Section title="Compétences en Informatique">
        <ul>
          <li>Langages : Java, C#, C++</li>
          <li>Algorithmes, structures de données</li>
          <li>Travail en équipe, communication</li>
          <li>Motivation et curiosité technologique</li>
        </ul>
      </Section>

      <Section title="Centres d’intérêt">
        <ul>
          <li>Développement logiciel</li>
          <li>Programmation et codage</li>
          <li>Collaboration en équipe</li>
          <li>Technologies modernes</li>
        </ul>
      </Section>

      <Section title="Formations">
        <ul>
          <li>Licence 2 - Université de Yaoundé 1 | 2024 – 2025</li>
          <li>Licence 1 - Université de Yaoundé 1 | 2023 – 2024</li>
          <li>Baccalauréat C - Lycée Bilingue de Mbouda | 2023</li>
          <li>Probatoire C - Lycée Bilingue de Mbouda | 2022</li>
        </ul>
      </Section>

      <Section title="Certification">
        <p>
          Je certifie que les informations contenues dans ce CV sont exactes et véridiques.
          Je suis prête à fournir des références et des preuves de mes compétences et expériences si nécessaire.
        </p>
      </Section>

      <Section title="Audio de Présentation">
        <div>
          <p className="clickable" onClick={() => playAudio(10)}>▶️ Profil</p>
          <p className="clickable" onClick={() => playAudio(30)}>▶️ Compétences</p>
          <p className="clickable" onClick={() => playAudio(50)}>▶️ Projets</p>
        </div>
        <audio ref={audioRef} controls>
          <source src="CV-Audio.mp3" type="audio/mpeg" />
          Votre navigateur ne supporte pas la lecture audio.
        </audio>
      </Section>

      <Section title="Vidéo de Présentation">
        <video controls>
          <source src="CV-Video.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </Section>
    </>
  );
};

const Section = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);

export default CV;

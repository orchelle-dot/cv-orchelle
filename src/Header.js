import React from 'react';
import './CV.css'; // Assure-toi que CV.css gère bien le style aussi ici

const Header = () => {
  return (
    <header className="header">
      <img src={`${process.env.PUBLIC_URL}/image.jpg`} alt="Photo de profil" className="profile-pic" />


      <div className="contact-info">
        <h1 className="name">YEMENE LOMBOUE ORCHELLE</h1>
        <h3 className="subtitle">Développeuse Web Junior • Étudiante ICT4D</h3>

        <p><strong>📞 Téléphone :</strong> +237 698678718</p>
        <p><strong>📧 Email :</strong> <a href="mailto:merveillelomboue@gmail.com">merveillelomboue@gmail.com</a></p>
        <p><strong>📍 Adresse :</strong> Soa, Yaoundé, Cameroun</p>
        <p><strong>💼 Statut :</strong> Disponible pour un stage</p>
        <p><strong>💻 GitHub :</strong> <a href="https://github.com/orchelle-dot" target="_blank" rel="noreferrer">github.com/orchelle-dot</a></p>
        <p><strong>💬 Devise :</strong> "Toujours apprendre, toujours progresser."</p>
      </div>
    </header>
  );
};

export default Header;

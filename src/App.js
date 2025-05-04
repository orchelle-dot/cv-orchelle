import React, { useState, useEffect } from 'react';
import CV from './CV';
import './CV.css'; // Assure-toi que ce fichier existe

function App() {
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <div style={{ padding: '10px' }}>
        <label style={{ marginRight: '10px' }}>Choisir un thème :</label>
        <select onChange={(e) => setTheme(e.target.value)} value={theme}>
          <option value="light-theme">Clair</option>
          <option value="dark-theme">Sombre</option>
          <option value="violet-theme">Violet</option>
        </select>
      </div>
      <CV />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import "../settingsPage/settingsPage.scss";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  //   // Здесь можно добавить логику для сохранения выбранной темы в localStorage или другом хранилище
  // };

  return (
    <div className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}>
      <label style={{color:"white"}}>
        <input
          type="checkbox"
          // checked={darkMode}
          // onChange={toggleTheme}
        />
        Change Theme
      </label>
    </div>
  );
};

export default SettingsPage;

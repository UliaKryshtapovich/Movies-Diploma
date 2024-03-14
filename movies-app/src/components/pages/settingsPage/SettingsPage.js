// import React, { useEffect, useState } from "react";
import React from "react";
import "../settingsPage/settingsPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../pages/settingsPage/ThemeContext";


const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="settings-wrapper">
      <div 
        className={`theme-toggle`}
        onClick={toggleTheme}
        style={{ cursor: 'pointer', color: theme === 'dark' ? 'var(--colors-text-dark)' : 'var(--colors-text-light)' }}
      >
        {theme === 'dark' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        <label style={{cursor: 'pointer', marginLeft: '10px' }}>Change Theme</label>
      </div>
    </div>
  );
};

export default SettingsPage;
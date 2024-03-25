import React from "react";
import "../settingsPage/settingsPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../pages/settingsPage/ThemeContext";

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();

  const handleClearSetting = () => {

  };

  return (
    <div className="settings-wrapper">
      <div className="profile">
        <h3> Profile </h3>
        <div className="profile-wrapper">
          <div className="profile-name">
            <span>Name</span>
            <input
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="profile-email">
          <span>Email</span>
            <input
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
      <div className="password">
      <h3> Password </h3>
        <div className="password-wrapper">
          <div className="password-start">
            <span>Password</span>
            <input
              type="password"
              placeholder="Your password"
            />
          </div>
          <div className="password-new">
            <span> New password </span>
            <input
              type="password"
              placeholder="New password"
            />
          </div>
          <div className="password-confirm">
            <span> Confirm password </span>
            <input
              type="password"
              placeholder="Confirm password"
            />
          </div>
        </div>
      </div>
      <div className="color">
        <h3>Color mode</h3>
        <div className="color-wrapper">
          <div
            className={`theme-toggle`}
            onClick={toggleTheme}
            style={{
              cursor: "pointer"
            }}
          >
            {theme === "dark" ? (
              <FontAwesomeIcon icon={faMoon} className="svg-moon" style={{color:'rgba(123, 97, 255, 1)'}} />
            ) : (
              <FontAwesomeIcon icon={faSun} className="svg-sun" style={{color:'rgba(123, 97, 255, 1)'}} />
            )}
            <label style={{ cursor: "pointer", marginLeft: "10px" }}>
            Change Theme
            </label>
          </div>
        </div>
      </div>
      <div className="btns">
        <button className="cancel button" onClick={handleClearSetting}>Cancel</button>
        <button className="save button">Save</button>
      </div>
    </div>
  );
};

export default SettingsPage;
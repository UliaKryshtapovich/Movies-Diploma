import React from "react";
import "./sidebarLeft.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFireFlameCurved, faBookmark, faGear } from "@fortawesome/free-solid-svg-icons";

const SidebarLeft = () => {
  return (
    <div className="sidebar-wrapper"> 
    <nav className="sidebar-nav">
      <ul className="sidebar-nav_list">
        <li className="sidebar-nav_item">
          <FontAwesomeIcon icon={faHouse} />
          <span> Home </span>
        </li>
        <li className="sidebar-nav_item">
          <FontAwesomeIcon icon={faFireFlameCurved} /> <span> Trends </span>
        </li>
        <li className="sidebar-nav_item">
          <FontAwesomeIcon icon={faBookmark} />
          <span> Favorites </span>
        </li>
        <li className="sidebar-nav_item">
        <FontAwesomeIcon icon={faGear} />
          <span> Settings </span>
        </li>
      </ul>
    </nav>
    <footer className="footer"> 
      <p className="footer-text"> © All Rights Reserved</p>
    </footer>
    </div>
  );
};

export default SidebarLeft;

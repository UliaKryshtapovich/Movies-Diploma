import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./sidebarLeft.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFireFlameCurved,
  faBookmark,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';

const SidebarLeft = () => {

  $(document).ready(function() {
    $("li").click(function() {
      $("li").removeClass('highlighted');
      $(this).addClass('highlighted');
    });
  });
  
  return (
    <div className="sidebar-wrapper">
      <nav className="sidebar-nav">
        <ul className="sidebar-nav_list">
          <li className="sidebar-nav_item">
            <Link to="/postersList">
              <FontAwesomeIcon icon={faHouse} />
              Home
            </Link>
          </li>
          <li className="sidebar-nav_item">
            <NavLink to="/trendsPage">
              <FontAwesomeIcon icon={faFireFlameCurved} />
              Trends
            </NavLink>
          </li>
          <li className="sidebar-nav_item">
            <NavLink to="/favoritesPage">
              <FontAwesomeIcon icon={faBookmark} />
              Favorites
            </NavLink>
          </li>
          <li className="sidebar-nav_item">
            <NavLink to="/settingsPage">
              <FontAwesomeIcon icon={faGear} />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export default SidebarLeft;
import React, { useState } from "react";
import "./header.scss";
import imgLogoDark from "../../resources/pixemaDark.png";
import imgLogoLight from "../../resources/pixemaLight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faFilter,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import NotFoundModal from "../modals/notFoundMovieModal/NotFoundModal";
import { getPost } from "../../services/MoviesService";
import { useSearchContext } from "../searchContext/SearchContext";
import { useTheme } from "../pages/settingsPage/ThemeContext";
import FilterModal from "../../components/modals/filterModal/FilterModal";
import SidebarLeft from "../sidebarLeft/SidebarLeft";

function Header() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { setSearchResults } = useSearchContext();
  const { theme } = useTheme(); // тема
  const [searchError, setSearchError] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = () => {
    const searchQuery = search.toLowerCase();

    getPost(searchQuery).then((data) => {
      console.log("клик на поиск", data.Search);
      if (data?.Search && data.Search.length > 0) {
        const finalResults = data.Search.filter((item) =>
          item.Title.toLowerCase().includes(searchQuery)
        );

        setSearchResults(finalResults);
        setSearchError(false);
      } else {
        setSearchError(true);
        setShowModal(true);
      }
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenFilterModal = () => {
    setShowFilterModal(true);
  };

  const handleCloseFilterModal = () => {
    setShowFilterModal(false);
  };

  const handleOpenBurgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a className="header-logo" href="/postersList">
        <img
          className="header-logo_img"
          src={theme === "dark" ? imgLogoDark : imgLogoLight}
          alt="logo"
        />
      </a>
      <div className="header-wrapper_search">
        <div className="header-search">
          <input
            className="header-search_input"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {showFilterModal && (
            <FilterModal
              show={showFilterModal}
              handleClose={handleCloseFilterModal}
            />
          )}
          <FontAwesomeIcon
            icon={faFilter}
            className="icon-filter"
            onClick={handleOpenFilterModal}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon-search"
            // onClick={onClick}
            value={search}
            onClick={handleSearch}
          />
        </div>
        <div className="header-login">
          <button className="header-btn">JK</button>
          <p
            className="header-btn_text"
            style={{ color: "var(--colors-title)" }}
          >
            Julia K.
          </p>
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down_icon" />
        </div>
        <button
          className={isMenuOpen ? "burger-menu open" : "burger-menu"}
          onClick={handleOpenBurgerMenu}
        >
          <FontAwesomeIcon icon={faBars} className="burger-menu_icon" />
          {isMenuOpen && <SidebarLeft />}
        </button>
      </div>
      {showModal && searchError && (
        <NotFoundModal show={showModal} handleClose={handleCloseModal} />
      )}
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import "./header.scss";
import imgLogoDark from "../../resources/pixemaDark.png";
import imgLogoLight from "../../resources/pixemaLight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faFilter,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import NotFoundModal from "../modals/notFoundMovieModal/NotFoundModal";
import { getPost } from "../../services/MoviesService";
import { useSearchContext } from "../searchContext/SearchContext";
import { useTheme } from "../pages/settingsPage/ThemeContext";
import FilterModal from "../../components/modals/filterModal/FilterModal";

function Header() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { setSearchResults } = useSearchContext();
  const { theme } = useTheme(); // тема
  const [searchError, setSearchError] = useState(false); // для отслеживания ошибки поиска
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleSearch = () => {
    getPost(search).then((data) => {
      console.log("клик на поиск", data.Search);
      if (data?.Search && data.Search.length > 0) {
        setSearchResults(data.Search);
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
          <button className="header-btn">AL</button>
          <p
            className="header-btn_text"
            style={{ color: "var(--colors-title)" }}
          >
            Artem Lapitski
          </p>
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down_icon" />
        </div>
      </div>
      {showModal && searchError && (
        <NotFoundModal show={showModal} handleClose={handleCloseModal} />
      )}
    </header>
  );
}

export default Header;
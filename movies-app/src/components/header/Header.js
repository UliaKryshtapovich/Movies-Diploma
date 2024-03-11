import React, { useState, useEffect } from "react";
import "./header.scss";
import imgLogo from "../../resources/pixema-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faFilter,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import NotFoundModal from "../modals/notFoundMovieModal/NotFoundModal";
import { getPost } from "../../services/MoviesService";

function Header() {
  const [post, setPost] = useState([]); // сам постер
  const [search, setSearch] = useState(""); // поиск запрос
  const [showModal, setShowModal] = useState(false); //  отображения not found

  useEffect(() => {
    // запрос к API для получения списка фильмов
    if (search === "") {
      getPost("new").then((data) => {
        setPost(data?.Search);
      });
    }
  }, [search]);

  const handleSearch = () => {
    getPost(search).then((data) => {
      if (data?.Search && data.Search.length > 0) {
        setPost(data.Search);
      } else {
        setShowModal(true);
      }
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header className="header">
      <a className="header-logo" href="/postersList">
        <img className="header-logo_img" src={imgLogo} alt="Logo" />
      </a>
      <div className="header-wrapper_search">
        <div className="header-search">
          <input
            className="header-search_input"
            placeholder="Search"
            // value={Value}
            Value={search} // значение из состояния search в пропс Value
            // onChange={onChange}
            onChange={(e) => setSearch(e.target.value)}//ф-я обновления search в пропс onChang
          />
          <FontAwesomeIcon
            icon={faFilter}
            className="icon-filter"
            // onClick={onClick}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon-search"
            // onClick={onClick}
            Value={search} // значение из состояния search в пропс Value
            onClick={handleSearch} 
          />
        </div>
        <div className="header-login">
          <button className="header-btn">AL</button>
          <p className="header-btn_text">Artem Lapitski</p>
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down_icon" />
        </div>
      </div>
      {showModal && (
        <NotFoundModal show={showModal} handleClose={handleCloseModal} />
      )}
    </header>
  );
}

export default Header;


// import React, { useState } from "react";
// import "./header.scss";
// import imgLogo from "../../resources/pixema-logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronDown,
//   faFilter,
//   faMagnifyingGlass,
// } from "@fortawesome/free-solid-svg-icons";
// import NotFoundModal from "../modals/notFoundMovieModal/NotFoundModal";
// import { getPost } from "../../services/MoviesService";
// // import {handleSearchResults} from "../../components/pages/postersList/PostersList";

// function Header({ onSearchResults }) {
//   const [search, setSearch] = useState(""); // поиск запрос
//   const [showModal, setShowModal] = useState(false); //  отображения not found

//   const handleSearch = () => {
//     getPost(search).then((data) => {
//       if (data?.Search && data.Search.length > 0) {
//         handleSearchResults(data.Search); // вызов для передачи результатов поиска
//       } else {
//         setShowModal(true);
//       }
//     });
//   };   

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <header className="header">
//       <a className="header-logo" href="/postersList">
//         <img className="header-logo_img" src={imgLogo} alt="Logo" />
//       </a>
//       <div className="header-wrapper_search">
//         <div className="header-search">
//           <input
//             className="header-search_input"
//             placeholder="Search"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <FontAwesomeIcon
//             icon={faFilter}
//             className="icon-filter"
//           />
//           <FontAwesomeIcon
//             icon={faMagnifyingGlass}
//             className="icon-search"
//             onClick={handleSearch}
//           />
//         </div>
//         <div className="header-login">
//           <button className="header-btn">AL</button>
//           <p className="header-btn_text">Artem Lapitski</p>
//           <FontAwesomeIcon icon={faChevronDown} className="arrow-down_icon" />
//         </div>
//       </div>
//       {showModal && <NotFoundModal show={showModal} handleClose={handleCloseModal} />}
//     </header>
//   );
// }

// export default Header;

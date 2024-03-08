// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faFilter } from "@fortawesome/free-solid-svg-icons";
// import imgLogo from "../../resources/pixema-logo.png";
// import { getPost, getSinglePost } from "../../services/MoviesService"; // Подключаем функцию для запроса данных

// const Header = () => {
//   const [searchInput, setSearchInput] = useState(""); // Хранит значение из поля ввода

//   const handleSearch = async () => {
//     let searchQuery = searchInput; // Используем значение из поля ввода по умолчанию
//     if (!searchInput) {
//       // Если поле ввода пустое, устанавливаем поиск по типу "map"
//       searchQuery = "map";
//     }
//     try {
//       const data = await getPost(searchQuery); // Отправляем запрос на сервер
//       console.log(data?.Search);
//       // Здесь вы можете обработать результат запроса, например, обновить состояние или отобразить результат на странице
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <header className="header">
//       <a className="header-logo" href="/homePage">
//         <img className="header-logo_img" src={imgLogo} alt="Logo" />
//       </a>
//       <div className="header-wrapper_search">
//         <div className="header-search">
//           {/* Обновляем состояние searchInput при изменении значения поля ввода */}
//           <input
//             className="header-search_input"
//             placeholder="Search"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//           <FontAwesomeIcon
//             icon={faFilter}
//             className="icon-filter"
//             onClick={handleSearch}
//           />
//         </div>
//         <div className="header-login">
//           <button className="header-btn"> AL </button>
//           <p className="header-btn_text"> Artem Lapitski </p>
//           <FontAwesomeIcon icon={faChevronDown} className="arrow-down_icon" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




import "./header.scss";
import imgLogo from "../../resources/pixema-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header({ onChange, Value, onClick, onKeyPress }) {
  return (
    <header className="header">
      <a className="header-logo" href="/homePage">
        <img className="header-logo_img" src={imgLogo} alt="Logo" />
      </a>
      <div className="header-wrapper_search">
        <div className="header-search">
          <input
            className="header-search_input"
            placeholder="Search"
            value={Value}
            onChange={onChange}
            onKeyPress={onKeyPress} 
          />
          <FontAwesomeIcon
            icon={faFilter}
            className="icon-filter"
            // onClick={onClick}
          />
           <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon-search"
            onClick={onClick}
          />
        </div>
        <div className="header-login">
          <button className="header-btn">AL</button>
          <p className="header-btn_text">Artem Lapitski</p>
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down_icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;


import "./header.scss";
import imgLogo from "../../resources/pixema-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faFilter } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="container"> */}
      <div className="header-wrapper">
        <a className="header-logo" href="/">
          <img className="header-logo_img" src={imgLogo} alt="Logo" />
        </a>
        <div className="header-search">
          <input className="header-search_input" placeholder="Search" />
          <FontAwesomeIcon icon={faFilter}  className="icon-filter"/>
        </div>
        <div className="header-login">
          <button className="header-btn"> AL </button>
          <p className="header-btn_text"> Artem Lapitski </p>
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down_icon" />
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../filterModal/filterModal.scss";
// import { useDispatch } from "react-redux";
// import { setFromDate, setToDate } from "../../redux/filterSlice";

function FilterModal({ handleClose}) {

  const handleCloseModal = () => {
    handleClose();
  };

  return (
    <div className="filter">
      <div className="filter-wrapper">
        <div className="filter-title_wrapper">
          <h3> Filters </h3>
          <FontAwesomeIcon
            className="filter-icon_close"
            icon={faTimes}
            onClick={handleCloseModal}
          />
        </div>
        <div className="filter-sort">
          <p> Sort by </p>
          <div className="filter-sort_wrapper">
            <button className="filter-sort_rating">Rating</button>
            <button className="filter-sort_year">Year</button>
          </div>
        </div>
        <div className="filter-movie">
          <p> Type </p>
          <div className="filter-movie_type">
            <button>movie </button>
            <button> series </button>
            <button> episode </button>
          </div>
        </div>
        <div className="filter-years">
          <p> Years </p>
          <div className="filter-years_wrapper">
            <input
              className="filter-years_from"
              type="text"
              placeholder="From"
              // value={fromDate}
              // onChange={handleFromDateChange}
            />
            <input
              className="filter-years_to"
              type="text"
              placeholder="To"
              // value={toDate}
              // onChange={handleToDateChange}
            />
          </div>
        </div>
        <div className="filter-rating">
          <p> Rating </p>
          <div className="filter-rating_wrapper">
            <input className="filter-rating_from" placeholder="From"></input>
            <input className="filter-rating_to" placeholder="To"></input>
          </div>
        </div>
        <div className="filter-buttons">
          <button className="filter-buttons_clear"> Clear filter </button>
          <button className="filter-buttons_results">Show Results</button>
          {/* <button className="filter-buttons_results" onClick={handleShowResultsClick}>Show Results</button> */}
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
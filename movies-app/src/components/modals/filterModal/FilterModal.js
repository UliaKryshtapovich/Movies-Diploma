import React from "react";
import "../filterModal/filterModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function FilterModal({ show, handleClose }) {

    const handleCloseModal = () => {
        handleClose();
    };

    return (
    <div className={`filter ${show ? 'show' : ''}`}>
      <div className="filter-wrapper">
        <div className="filter-title_wrapper">
          <h3> Filters </h3>
        <FontAwesomeIcon 
            className='filter-icon_close'
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
          <p> Full or short movie name </p>
          <input
            className="filter-movie_input"
            placeholder="Your text"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* <div className="filter-genre">
          <p>Genre</p>
          <div className="filter-genre_sort"> </div>
        </div> */}
        <div className="filter-years">
          <p> Years </p>
          <div className="filter-years_wrapper">
            <input className="filter-years_from" placeholder="From"></input>
            <input className="filter-years_to" placeholder="To"></input>
          </div>
        </div>
        <div className="filter-rating">
          <p> Rating </p>
          <div className="filter-rating_wrapper">
            <input className="filter-rating_from" placeholder="From"></input>
            <input className="filter-rating_to" placeholder="To"></input>
          </div>
        </div>
        <div className="filter-country">
            <p> Country </p>
          <input
            className="filter-country_input"
            placeholder="Select country"
          ></input>
        </div>
        <div className="filter-buttons">
          <button className="filter-buttons_clear"> Clear filter </button>
          <button className="filter-buttons_results"> Show results </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;

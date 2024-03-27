import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  setYearFilter,
  setTypeFilter,
  resetFilters,
} from "../../../redux/filterSlice";
import "../../../components/modals/filterModal/filterModal.scss";
import $ from "jquery";

function FilterModal({ handleClose }) {
  const [yearFilter, setYearFilterLocal] = useState("");
  const [typeFilter, setTypeFilterLocal] = useState("");
  const dispatch = useDispatch();

  const handleYearChange = (e) => {
    const { value } = e.target;
    setYearFilterLocal(value);
  };

  const handleTypeChange = (type) => {
    setTypeFilterLocal(type);
  };

  const handleClearFilters = () => {
    dispatch(resetFilters()); // сброс всех фильтров
    setYearFilterLocal(""); //  по году
    setTypeFilterLocal(""); // типу
  };

  const handleFiltersClick = () => {
    // диспатчим для обновления actions
    dispatch(setYearFilter(yearFilter));
    dispatch(setTypeFilter(typeFilter));
    handleClose();
  };

  const handleCloseModal = () => {
    handleClose();
  };

  $(document).ready(function () {
    $("button.filter-btn").click(function () {
      $("button.filter-btn").removeClass("highlighted");
      $(this).addClass("highlighted");
    });
  });

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
            <button className="filter-sort_rating filter-btn">Rating</button>
            <button className="filter-sort_year filter-btn">Year</button>
          </div>
        </div>
        <div className="filter-movie">
          <p> Type </p>
          <div className="filter-movie_type">
            <button
              className="filter-btn"
              onClick={() => handleTypeChange("movie")}
            >
              movie
            </button>
            <button
              className="filter-btn"
              onClick={() => handleTypeChange("series")}
            >
              series
            </button>
            <button
              className="filter-btn"
              onClick={() => handleTypeChange("episode")}
            >
              episode
            </button>
          </div>
        </div>
        <div className="filter-years">
          <p> Year </p>
          <input
            className="filter-years_input"
            placeholder="Year"
            value={yearFilter}
            onChange={handleYearChange}
          />
        </div>
        <div className="filter-buttons">
          <button
            className="filter-buttons_clear filter-btn"
            onClick={handleClearFilters}
          >
            Clear filter
          </button>
          <button
            className="filter-buttons_results filter-btn"
            onClick={handleFiltersClick}
          >
            Show Results
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;

import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../../../resources/img-not-found.jpg";
import { useSelector } from "react-redux";

function PosterCard({ data, onClick }) {// текущиe фильтры по году и типу из redux
  const yearFilter = useSelector((state) => state.filter.year); 
  const typeFilter = useSelector((state) => state.filter.type); 

  const isYearMatch = () => {
    if (!yearFilter) return true; // фильтр не установлен -> показываем все постеры
    return data.Year === yearFilter; 
  };

  const isTypeMatch = () => {
    if (!typeFilter) return true; 
    return data.Type === typeFilter; 
  };

  const isMatch = () => {
    return isYearMatch() && isTypeMatch(); 
  };

  if (!isMatch()) {
    return null;
  };

  return (
    <li
      type={data.Type}
      id={data.imdbID}
      key={data.imdbID}
      onClick={() => onClick(data.imdbID)}
    >
      <Link to={`/detail/${data.imdbID}`}>
        <div className="render-poster">
          <div className="render-poster_img">
          <img src={data.Poster !== "N/A" ? data.Poster : notFoundImg} alt={data.Title} />
          </div>
          <div className="render-poster_rating">{data.imdbRating}</div>
          <h3>{data.Title}</h3>
          <p>{data.Year}</p>
          <p>{data.Type} </p>
        </div>
      </Link>
    </li>
  );
}

export default PosterCard;

import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../../../resources/img-not-found.jpg";

function PosterCard({ data, onClick }) {
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
        </div>
      </Link>
    </li>
  );
}

export default PosterCard;

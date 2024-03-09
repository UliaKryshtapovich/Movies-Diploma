import React from "react";
import { Link } from "react-router-dom";
import "../renderPosterCard/renderPosterCard.scss";

function RenderPosterCard({ Poster, Title, Year, Type, onClick, ImdbID, ImdbRating}) {
  return (
    <li key={ImdbID} onClick={onClick}>
      <Link to={`/detailPage/${ImdbID}`}>
        <div className="render-poster">
          <div className="render-poster_img">
            <img src={Poster} alt={Title} />
          </div>
          <div className="render-poster_rating">{ImdbRating}</div>
          <h3>{Title}</h3>
          <p>{Year}</p>
        </div>
      </Link>
    </li>
  );
}

export default RenderPosterCard;
import React from "react";
import "../detailPage/detailPage.scss";
// import img from "../../../resources/img-not-found.jpg";
// import { useParams, Link  } from "react-router-dom";

function DetailPage({
  Runtime,
  BoxOffice,
  Country,
  Actors,
  Released,
  Director,
  Writer,
  Plot,
  Poster,
  Title,
  Year,
  onClick,
  ImdbID,
  ImdbRating,
  ImdbVotes,
  Type,
  Genre
}) {
  return (
    <div className="detail-wrapper" style={{backgroundColor: "pink"}} imdbID={ImdbID}>
      <div className="detail-img_wrapper" data-type={Type}>
        <div className="detail-img_img" style={{backgroundColor: "white"}}>
          <img src={Poster} alt={Title} className="detail-img_img" />
        </div>
        <div className="detail-btn_wrapper">
          <div className="detail-btn_bookmark" onClick={onClick}>
            <p> </p>
          </div>
          <div className="detail-btn_share">
            <h3>{Title}</h3>
          </div>
        </div>
      </div>
      <div className="detail-info_wrapper">
        <div className="detail-info_category">
          <p>{Genre}</p>
        </div>
        <div className="detail-info_title"> </div>
        <div className="detail-info_overview">
          <div>{ImdbRating} </div>
          <div>IMDb: {ImdbVotes}</div>
          <div>{Runtime}</div>
        </div>
        <div className="detail-info_more">
          <p> Year: {Year}</p>
          <p> Released: {Released}</p>
          <p> Plot: {Plot}</p>
          <p> BoxOffice: {BoxOffice}</p>
          <p> Country: {Country}</p>
          <p> Actors: {Actors}</p>
          <p> Director: {Director}</p>
          <p> Writer: {Writer} </p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
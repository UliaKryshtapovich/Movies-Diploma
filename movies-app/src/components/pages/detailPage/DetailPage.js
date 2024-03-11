import React, { useState, useEffect } from "react";
import { getSinglePost } from "../../../services/MoviesService";
import "../detailPage/detailPage.scss";
import { useParams } from "react-router-dom";

function DetailPage({ selectedImdbID }) {
  let { imdbID } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    if (imdbID) {
      console.log("переход на страницу с фильмом id", imdbID)
      getSinglePost(imdbID).then((data) => {
        setMovieData(data);
      });
    }
  }, [imdbID]);

  return (
    <div className="detail-wrapper">
      {movieData && (
        <div className="detail-wrapper" style={{backgroundColor: "pink"}}>
          <div className="detail-img_wrapper" data-type={movieData.Type}>
            <div className="detail-img_img" style={{backgroundColor: "white"}}>
              <img src={movieData.Poster} alt={movieData.Title} className="detail-img_img" />
            </div>
            <div className="detail-btn_wrapper">
              <div className="detail-btn_bookmark" >
                <p> </p>
              </div>
              <div className="detail-btn_share">
                <h3>{movieData.Title}</h3>
              </div>
            </div>
          </div>
          <div className="detail-info_wrapper">
            <div className="detail-info_category">
              <p>{movieData.Genre}</p>
            </div>
            <div className="detail-info_title"> </div>
            <div className="detail-info_overview">
              <div>{movieData.imdbRating} </div>
              <div>IMDb: {movieData.imdbVotes}</div>
              <div>{movieData.Runtime}</div>
            </div>
            <div className="detail-info_more">
              <p> Year: {movieData.Year}</p>
              <p> Released: {movieData.Released}</p>
              <p> Plot: {movieData.Plot}</p>
              <p> BoxOffice: {movieData.BoxOffice}</p>
              <p> Country: {movieData.Country}</p>
              <p> Actors: {movieData.Actors}</p>
              <p> Director: {movieData.Director}</p>
              <p> Writer: {movieData.Writer} </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPage




import React, { useState, useEffect } from "react";
import { getSinglePost } from "../../../services/MoviesService";
import "../detailPage/detailPage.scss";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShareNodes } from '@fortawesome/free-solid-svg-icons';

function DetailPage() {
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
    <div className="detail-page">
      {movieData && (
        <div className="detail-wrapper">
          <div className="detail-img_wrapper" data-type={movieData.Type}>
            <div className="detail-img_img">
              <img src={movieData.Poster} className="detail-img_img" />
            </div>
            <div className="detail-btn_wrapper">
              <div className="detail-btn_bookmark" >
              <FontAwesomeIcon icon={faBookmark} />
              </div>
              <div className="detail-btn_share">
                <FontAwesomeIcon icon={faShareNodes} />
              </div>
            </div>
          </div>
          <div className="detail-info_wrapper">
            <div className="detail-info_category">
              <p>{movieData.Genre}</p>
            </div>
            <div className="detail-info_title"> 
                <h3>{movieData.Title}</h3>
            </div>
            <div className="detail-info_overview">
              <div>{movieData.imdbRating} </div>
              <div>IMDb: {movieData.imdbVotes}</div>
              <div>{movieData.Runtime}</div>
            </div>
            <div className="detail-info_plot"> <p> {movieData.Plot}</p></div>
            <div className="detail-info_more">
              <div  className="detail-info_more__text"> Year: <p> {movieData.Year} </p></div>
              <div  className="detail-info_more__text"> Released: <p> {movieData.Released} </p> </div>
              <div  className="detail-info_more__text"> BoxOffice:<p>  {movieData.BoxOffice}</p></div>
              <div  className="detail-info_more__text"> Country: <p> {movieData.Country}</p></div>
              <div  className="detail-info_more__text"> Actors:<p> {movieData.Actors}</p></div>
              <div  className="detail-info_more__text"> Director: <p>{movieData.Director} </p></div>
              <div  className="detail-info_more__text"> Writer:<p>{movieData.Writer} </p> </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPage




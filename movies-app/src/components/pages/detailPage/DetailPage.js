import React from "react";
import "../detailPage/detailPage.scss";
// import img from "../../../resources/img-not-found.jpg";
// import { useParams, Link  } from "react-router-dom";

function DetailPage({ movieDetails }) {

  return (
    <div className="detail-wrapper">
      <div className="detail-img_wrapper" >
        <img  alt="ff" className="detail-img_img"/>
        <div className="detail-btn_wrapper">
          <div className="detail-btn_bookmark">
            <p> </p>
          </div>
          <div className="detail-btn_share">
            <h3> Title </h3>
          </div>
        </div>
      </div>
      <div className="detail-info_wrapper">
        <div className="detail-info_category">
          <p>category</p>
          <p>category</p>
          <p> category</p>
        </div>
        <div className="detail-info_title"> </div>
        <div className="detail-info_overview">
          <div>0.0</div>
          <div>IMDb: {movieDetails.IMDb}</div>
          <div>100min</div>
        </div>
        <div className="detail-info_more"> //значения напрямую из объекта movieDetails 
          <p> Year: {movieDetails.Year}</p> 
          <p> Released: {movieDetails.Released}</p>
          <p> Plot: {movieDetails.Plot}</p> 
          <p> BoxOffice: {movieDetails.BoxOffice}</p> 
          <p> Country: {movieDetails.Country}</p>
          <p> Production: </p>
          <p> Actors: {movieDetails.Actors}</p> 
          <p> Director: {movieDetails.Director}</p> 
          <p> Writer: </p>
        </div>
      </div>
    </div>
  );
}

 export default DetailPage;

// import React, { useState, useEffect } from "react";
// import "../detailPage/detailPage.scss";
// import img from "../../../resources/img-not-found.jpg";
// import { getMovieData, getMovie } from "../../../services/MoviesService";

// function DetailPage({ movieDetails }) {
//   const [movieData, setMovieData] = useState(null);

//   useEffect(() => {
//     async function fetchMovieData() {
//       try {
//         const data = await getMovieData(movieDetails.imdbID);
//         setMovieData(data);
//       } catch (error) {
//         console.error("Error fetching movie data:", error);
//       }
//     }

//     fetchMovieData();
//   }, [movieDetails.imdbID]);

//   if (!movieData) {
//     return <div>Loading...</div>;
//   }

//   const { Poster, Title, imdbRating, Year, Genre, Runtime, Released, Plot, BoxOffice, Country, Production, Actors, Director, Writer } = movieData;

//   return (
//     <div className="detail-wrapper">
//       <div className="detail-img_wrapper">
//         <img src={Poster || img} alt={Title} className="detail-img_img"/>
//         <div className="detail-btn_wrapper">
//           <div className="detail-btn_bookmark">
//             <p></p>
//           </div>
//           <div className="detail-btn_share">
//             <h3>{Title}</h3>
//           </div>
//         </div>
//       </div>
//       <div className="detail-info_wrapper">
//         <div className="detail-info_category">
//           <p>Category: {Genre}</p>
//         </div>
//         <div className="detail-info_title"> </div>
//         <div className="detail-info_overview">
//           <div>0.0</div>
//           <div>IMDb: {imdbRating}</div>
//           <div>{Runtime}</div>
//         </div>
//         <div className="detail-info_more">
//           <p>Year: {Year}</p>
//           <p>Released: {Released}</p>
//           <p>Plot: {Plot}</p>
//           <p>BoxOffice: {BoxOffice}</p>
//           <p>Country: {Country}</p>
//           <p>Production: {Production}</p>
//           <p>Actors: {Actors}</p>
//           <p>Director: {Director}</p>
//           <p>Writer: {Writer}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DetailPage;

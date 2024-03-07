import React from "react";
import "../detailPage/detailPage.scss";

function DetailPage({ movieDetails }) { //  movieDetails в качестве пропса
  return (
    <div className="detail-wrapper">
      <div className="detail-img_wrapper">
        <img />
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
          <p> </p>
          <p> </p>
          <p> </p>
        </div>
        <div className="detail-info_title"> </div>
        <div className="detail-info_overview">
          <div>0.0</div>
          <div>IMDb</div>
          <div>100min</div>
        </div>
        <div className="detail-info_more">
          <p> Year: {movieDetails.Year}</p> // значения напрямую из объекта movieDetails 
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
// import "./detailage.scss";
// import { useParams } from "react-router-dom";
// import MoviesService from "../../services/MoviesService";

// function DetailPage() {
//   const [movieDetails, setMovieDetails] = useState(null);
//   const { movieId } = useParams();
//   const moviesService = new MoviesService();

//   useEffect(() => {
//     fetchMovieDetails();
//   }, []);

//   const fetchMovieDetails = async () => {
//     try {
//       const data = await moviesService.getMovieDetails(movieId);
//       setMovieDetails(data);
//     } catch (error) {
//       console.error("Error fetching movie details:", error);
//     }
//   };

//   return (
//       <div className="detail-wrapper">
// //       <div className="detail-img_wrapper">
// //         <img />
// //         <div className="detail-btn_wrapper">
// //           <div className="detail-btn_bookmark">
// //             <p> </p>
// //           </div>
// //           <div className="detail-btn_share">
// //             <h3> Title </h3>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="detail-info_wrapper">
// //         <div className="detail-info_category">
// //           <p> </p>
// //           <p> </p>
// //           <p> </p>
// //            </div>
// //         <div className="detail-info_title"> </div>
// //         <div className="detail-info_overview">
// //           <div>0.0</div>
// //           <div>IMDb</div>
// //           <div>100min</div>
// //         </div>
// //         <div className="detail-info_more">
// //           <p> Year: </p>
// //           <p> Released: </p>
// //           {/* <p> Plot:{{movieDetails['Plot']}}</p> */}
// //           {/* <p> BoxOffice: {{movieDetails['BoxOffice']}}</p> */}
// //           {/* <p> Country:{{movieDetails['Country']}}</p> */}
// //           <p> Production: </p>
// //           {/* <p> Actors: {{movieDetails['Actors']}}</p> */}
// //           {/* <p> Director:{{movieDetails['Director']}}</p> */}
// //           <p> Writer: </p>
// //         </div>
// //       </div>
// //     </div>
//   );
// }

// export default DetailPage;

import React from "react";
import "../renderPosterCard/renderPosterCard.scss";

function RenderPosterCard({ movie }) {
  const rating = movie["Ratings"] && movie["Ratings"].length > 0 ? movie["Ratings"][0]["Value"] : "0.0";
  return (
    <div className="render-poster">
      <div className="render-poster_img">
        <img
          className="poster-img"
          src={movie["Poster"]}
          alt={movie["Title"]}
        />
          <div className="render-poster_rating poster-rating_green" >{rating}</div>
        <div className="render-poster_rating">{movie["Value"]} </div>
      </div>
      <h4 className="card-title">{movie["Title"]}</h4>
      <p className="card-text">Year: {movie["Year"]}</p>
    </div>
  );
}

export default RenderPosterCard;

// import React, { useState } from "react";
// import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
// import "../renderPosterCard/renderPosterCard.scss";
// import  imgNotFoundposter  from "../../resources/img-not-found.jpg";

// function RenderPosterCard({ movie }) {
//   const [redirectTo, setRedirectTo] = useState(null);
//   const history = useHistory();

//   const handleClick = () => {
//     setRedirectTo(`/movie/${movie.imdbID}`);
//   };

//   // если есть URL для перехода, то делаем редирект
//   if (redirectTo) {
//     history.push(redirectTo);
//     return null;
//   }

//   const rating =
//     movie["Ratings"] && movie["Ratings"].length > 0
//       ? movie["Ratings"][0]["Value"]
//       : "0.0";

//   return (
//     <div className="render-poster" onClick={handleClick}>
//       <div className="render-poster_img">
//         <img className="poster-img" src={movie["Poster"] || imgNotFoundposter} alt={movie["Title"]} />
//         <div className="render-poster_rating poster-rating_green">{rating}</div>
//       </div>
//       <h4 className="card-title">{movie["Title"]}</h4>
//       <p className="card-text">Year: {movie["Year"]}</p>
//     </div>
//   );
// }

// RenderPosterCard.propTypes = {
//   movie: PropTypes.object.isRequired
// };

// export default RenderPosterCard;











// import React from "react";
// import "../renderPosterCard/renderPosterCard.scss";

// function RenderPosterCard({ movie }) {
//   // Проверяем, определен ли массив рейтингов
//   if (movie.Ratings) {
//     // Находим объект рейтинга IMDb, если он доступен
//     const imdbRating = movie.Ratings.find(rating => rating.Source === "Internet Movie Database");

//     // Проверяем, найден ли рейтинг IMDb
//     if (imdbRating) {
//       // Разделяем строку значения рейтинга по символу "/"
//       const imdbRatingValue = imdbRating.Value.split("/")[0];
//       return (
//         <div className="render-poster">
//           <div className="render-poster_img">
//             <img className="poster-img" src={movie.Poster} alt={movie.Title} />
//             <div className="render-poster_rating">
//               {imdbRatingValue}
//             </div>
//           </div>
//           <h1 className="card-title">{movie.Title}</h1>
//           <p className="card-text">Year: {movie.Year}</p>
//         </div>
//       );
//     }
//   }

//   // Если рейтинг IMDb отсутствует или массив рейтингов не определен, отображаем сообщение
//   return (
//     <div className="render-poster">
//       <div className="render-poster_img">
//         <img className="poster-img" src={movie.Poster} alt={movie.Title} />
//         <div className="render-poster_rating">
//          NONE
//         </div>
//       </div>
//       <h1 className="card-title">{movie.Title}</h1>
//       <p className="card-text">Year: {movie.Year}</p>
//     </div>
//   );
// }

// export default RenderPosterCard;

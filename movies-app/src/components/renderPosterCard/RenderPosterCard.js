import React from "react";
import { Link } from "react-router-dom";
import "../renderPosterCard/renderPosterCard.scss";

function RenderPosterCard({ Poster, Title, Year, Type, onClick, imdbID, Rating}) {
  return (
    <li key={imdbID} onClick={onClick}>
      {/* <Link to={`/detailPage/:id`}> */}
      <Link to={`/detailPage/${imdbID}`}>
        <div className="render-poster">
          <div className="render-poster_img">
            <img src={Poster} alt={Title} />
          </div>
          <div className="render-poster_rating">{Rating}</div>
          <h3>{Title}</h3>
          <p>{Year}</p>
        </div>
      </Link>
    </li>
  );
}

export default RenderPosterCard;

// import React, { useState, useEffect } from "react";
// import { getPost, getSinglePost } from '../../services/MoviesService';
// import { Link } from "react-router-dom";
// import "../renderPosterCard/renderPosterCard.scss";
// import "../pages/detailPage/detailPage.scss";
// import "../pages/homePageMovies/homePage.scss"
// // import img from "../../../resources/img-not-found.jpg";

// function RenderPosterCard () {
//   const [post, setPost] = useState([]);
//   const [movies, setMovies] = useState([]);
//   const [singlePost, setSinglePost] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   // useEffect (() => {
//   //     getPost(search).then((data)=>{
//   //       console.log(data?.Search);
//   //       setPost(data?.Search)
//   //     });
//   //   }, [] );

//     const handleClickPost = (imdbID) => {
//       console.log(imdbID);
//       getSinglePost(imdbID).then((data) => {
//         setSinglePost(data);
//         console.log(data);
//       })
//     }

//   return (
//     <>
//     {!!!post.lenght && post.map(data => {
//         return (
//           <li key={data.imdbID} onClick={() => handleClickPost(data.imdbID)}>
//             <Link to={`/detailPage/${data.imdbID}`}>
//               <div className="render-poster">
//                 <div className="render-poster_img">
//                   <img src={data.Poster} alt={data.Title} />
//                 </div>
//                 <div className="render-poster_rating">
//                   0.0 {data.imdbRating}
//                 </div>
//                 <h3>{data.Title}</h3>
//                 <p>{data.Year}</p>
//               </div>
//             </Link>
//           </li>
//         );
//       })}
//     </>
//   );
// };

// export default RenderPosterCard;

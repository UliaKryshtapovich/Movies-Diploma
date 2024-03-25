// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setPostersList,
//   setPage,
//   resetPostersList,
// } from "../../redux/postersSlice";
// import { getSinglePost, getPost } from "../../../services/MoviesService";
// import "../../pages/postersList/postersList.scss";
// import DetailPage from "../../../components/pages/detailPage/DetailPage";
// import { useSearchContext } from "../../searchContext/SearchContext";
// import PosterCard from "./PosterCard";


// interface PosterData {
//   imdbID: string;
//   Poster: string;
//   Title: string;
//   Year: string;
//   imdbRating: string;
//   Type: string;
// }

// function PostersList(): JSX.Element {
//   const [showDetailPage, setShowDetailPage] = useState<boolean>(false);
//   const [movieData, setMovieData] = useState (null);
//   const { searchResults } = useSearchContext();
//   const dispatch = useDispatch();
//   const currentPage: number = useSelector((state) => state.posters.page);
//   const postersListData: PosterData[] = useSelector((state) => state.posters.postersList) || [];
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     if (searchResults.length === 0) {
//       getPost("new").then((data) => {
//         dispatch(setPostersList(data?.Search));
//       });
//     } else {
//       dispatch(setPostersList(searchResults));
//     }
//     return () => {
//       dispatch(resetPostersList());
//     };
//   }, [searchResults, dispatch]);

//   const handleClickPost = (imdbID: string): void => {
//     getSinglePost(imdbID).then((data) => {
//       setMovieData(data);
//       setShowDetailPage(true);
//     });
//   };

//   const loadMore = (): void => {
//     const nextPage: number = currentPage + 1;
//     dispatch(setPage(nextPage));
//     setLoading(true);
//     getPost(
//       searchResults.length === 0 ? "new" : searchResults[0].Title,
//       nextPage
//     ).then((data) => {
//       if (data?.Search) {
//         dispatch(setPostersList(data?.Search, false));
//         setLoading(false);
//       }
//     });
//   };

//   return (
//     <div className="posters-list">
//       <ul className="movies-grid">
//         {postersListData.map((data: PosterData) => (
//           <PosterCard key={data.imdbID} data={data} onClick={handleClickPost} />
//         ))}
//       </ul>
//       {showDetailPage && movieData && <DetailPage movieData={movieData} />}
//       <div className="posters-button_wrapper">
//         <button className="button-posters button-load" onClick={loadMore}>
//           <div className="inner">
//             {loading ? (
//               <div
//                 className="loader"
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   height: "30px",
//                   width: "30px",
//                 }}
//               ></div>
//             ) : (
//               <span>Show more</span>
//             )}
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PostersList;
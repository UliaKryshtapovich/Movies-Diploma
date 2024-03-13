import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostersList, setLoading, setPage, resetPostersList } from "../../redux/postersSlice";
import { getSinglePost, getPost } from "../../../services/MoviesService";
import "../../pages/postersList/postersList.scss";
import DetailPage from "../../../components/pages/detailPage/DetailPage";
import { useSearchContext } from "../../searchContext/SearchContext";
// import {notFoundImg} from "../../../resources/img-not-found.jpg";
import PosterCard from "./posterCard";

function PostersList() {
  const [showDetailPage, setShowDetailPage] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const { searchResults } = useSearchContext();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.posters.page);
  const postersListData = useSelector((state) => state.posters.postersList) || [];

  useEffect(() => {
    if (searchResults.length === 0) {
      getPost("new").then((data) => {
        dispatch(setPostersList(data?.Search));
      });
    } else {
      dispatch(setPostersList(searchResults));
    }
     return () => {  //сбрасываем список постеров(когда переходим на home)
      dispatch(resetPostersList());
    };
  }, [searchResults, dispatch]);

  const handleClickPost = (imdbID) => {
    getSinglePost(imdbID).then((data) => {
      setMovieData(data);
      setShowDetailPage(true);
    });
  };

  const loadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(setLoading(true));
    dispatch(setPage(nextPage));
    getPost(
      searchResults.length === 0 ? "new" : searchResults[0].Title,
      nextPage
    ).then((data) => {
      if (data?.Search) {
        dispatch(setPostersList(data?.Search, false));
        dispatch(setLoading(false));
      }
    });
  };
  
  return (
    <div className="posters-list">
      <ul className="movies-grid">
        {postersListData.map((data) => (
          <PosterCard
            key={data.imdbID}
            data={data}
            onClick={handleClickPost}
          />
        ))}
      </ul>
      {showDetailPage && <DetailPage movieData={movieData} />}
      <div className="posters-button_wrapper">
        <button className="button-posters button-load" onClick={loadMore}>
          <div className="inner"> Show more </div>
        </button>
      </div>
    </div>
  );
}

export default PostersList;


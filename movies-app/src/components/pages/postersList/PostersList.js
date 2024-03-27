import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPostersList,
  setPage,
  resetPostersList,
} from "../../../redux/postersSlice";
import { getSinglePost, getPost } from "../../../services/MoviesService";
import "../../pages/postersList/postersList.scss";
import DetailPage from "../../../components/pages/detailPage/DetailPage";
import { useSearchContext } from "../../searchContext/SearchContext";
import PosterCard from "./posterCard";
import NoMoreMovies from '../../modals/NoMoreMovies/NoMoreMovies';

function PostersList() {
  const [showDetailPage, setShowDetailPage] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const { searchResults } = useSearchContext();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.posters.page);
  const postersListData =
    useSelector((state) => state.posters.postersList) || [];
  const [loading, setLoading] = useState(false);
  const [showNoMoreMovies, setShowNoMoreMovies] = useState(false);

  useEffect(() => {
    if (searchResults.length === 0) {
      getPost("new").then((data) => {
        dispatch(setPostersList(data?.Search));
      });
    } else {
      dispatch(setPostersList(searchResults));
    }
    return () => {
      //сбросить список постеров(когда переходим на home)
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
    dispatch(setPage(nextPage));
    setLoading(true);
    getPost(
      searchResults.length === 0 ? "new" : searchResults[0].Title,
      nextPage
    ).then((data) => {
      if (data?.Search) {
        dispatch(setPostersList(data?.Search, false));
        setLoading(false);
      } else {
        // модальное окно, если нет больше результатов
        setShowNoMoreMovies(true);
        setLoading(false);
      }
    });
  };

  const handleCloseNoMoreMovies = () => {
    setShowNoMoreMovies(false);
  };

  return (
    <div className="posters-list">
      <ul className="movies-grid">
        {postersListData.map((data) => (
          <PosterCard key={data.imdbID} data={data} onClick={handleClickPost} />
        ))}
      </ul>
      {showDetailPage && <DetailPage movieData={movieData} />}
      <NoMoreMovies show={showNoMoreMovies} onClose={handleCloseNoMoreMovies} />
      <div className="posters-button_wrapper">
        <button className="button-posters button-load" onClick={loadMore}>
          <div className="inner">
            {loading ? (
              <div
                className="loader"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "30px",
                  width: "30px",
                }}
              ></div>
            ) : (
              <span>Show more</span>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default PostersList;
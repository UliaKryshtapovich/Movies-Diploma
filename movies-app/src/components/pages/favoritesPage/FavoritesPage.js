import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import PosterCard from "../postersList/posterCard";
import "../favoritesPage/favoritesPage.scss";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from '../../redux/favoritesSlice';
import imgFavorite from '../../../resources/FrameNotFavorite.png'; // Импорт изображения

function FavoritesPage({ favorites }) {
  const dispatch = useDispatch();

  const handleClickPost = (id) => {
    console.log("Clicked on poster with ID:", id);
  };

  const handleRemoveFavorite = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className="posters-list">
      <h3 style={{ paddingBottom: "30px" }}> Favorites: </h3>
      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <img src={imgFavorite} alt="No favorites yet" />
          <p>No favorite posters yet</p>
        </div>
      ) : (
        <ul className="movies-grid">
          {favorites.map((data) => (
            <div className="favorite-delete" key={data.imdbID}>
              <PosterCard key={data.imdbID} data={data} onClick={handleClickPost} />
              <button
                className="bookmark-icon"
                onClick={() => handleRemoveFavorite(data.imdbID)}
              >
                <FontAwesomeIcon icon={faBookmark} className="favorite-icon" />
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;

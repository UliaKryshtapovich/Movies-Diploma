import React from "react";
import PosterCard from "../postersList/posterCard"; 

function FavoritesPage({ favorites }) {
  const handleClickPost = (id) => {
    console.log("Clicked on poster with ID:", id);
  };

  return (
    <div className="posters-list">
      <h3 style={{paddingBottom: '30px'}}> Favorites: </h3>
      <ul className="movies-grid">
        {favorites.map((data) => (
          <PosterCard
            key={data.imdbID}
            data={data}
            onClick={handleClickPost}
          />
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage;




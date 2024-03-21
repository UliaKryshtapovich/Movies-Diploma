import React, { useEffect } from "react";
import "../recomendPosterSlider/recomendPosterSlider.scss";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PosterCard from "../pages/postersList/posterCard";
import { getPost } from "../../services/MoviesService";

function RecommendedPostersSlider({ onClickPoster }) {
  const [searchResults, setSearchResults] = React.useState([]);
  const [slidesPerView, setSlidesPerView] = React.useState(3);

  useEffect(() => {
    getPost("are").then((data) => {
      setSearchResults(data?.Search || []);
    });
  }, []);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const handleClickRecommendsPost = (id) => {
    console.log("Clicked on poster with ID:", id);
  };

  useEffect(() => {
    const swiper = new Swiper(".recommended-posters-slider", {
      slidesPerView: slidesPerView,
      spaceBetween: 5,
      loop: true,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 800,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, [slidesPerView]);

  return (
    <div className="recommended-posters-slider swiper-container">
      <div className="swiper-wrapper">
        {searchResults.map((data) => (
          <div key={data.imdbID} className="swiper-slide">
            <PosterCard data={data} onClick={handleClickRecommendsPost} />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}

export default RecommendedPostersSlider;

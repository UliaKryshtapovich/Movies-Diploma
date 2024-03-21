import React, { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import '../trendsPage/trendsPage.scss';
import '../../pages/postersList/postersList.scss';

import PosterCard from '../postersList/posterCard';
import { getPost } from '../../../services/MoviesService';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function TrendsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsDuna, setSearchResultsDuna] = useState([]);
  const [trendingSlidesPerView, setTrendingSlidesPerView] = useState(3);

  useEffect(() => {
    getPost('this').then((data) => {
      setSearchResults(data?.Search || []);
    });
  }, []);

  useEffect(() => {
    getPost('dune').then((data) => {
      setSearchResultsDuna(data?.Search || []);
    });
  }, []);

  const handleClickTrendsPost = (id) => {
    console.log('Clicked on poster with ID:', id);
  };

  useEffect(() => {
    const updateTrendingSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setTrendingSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setTrendingSlidesPerView(3);
      } else {
        setTrendingSlidesPerView(1);
      }
    };

    updateTrendingSlidesPerView();

    window.addEventListener("resize", updateTrendingSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateTrendingSlidesPerView);
    };
  }, []);

  useEffect(() => {
    const trendingSwiper = new Swiper('.trending-swiper-container', {
      slidesPerView: trendingSlidesPerView,
      spaceBetween: 5,
      loop: true,
      slidesPerGroup: 1, 
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 1000, 
        disableOnInteraction: false, 
      },
      speed: 800, 
      navigation: {
        nextEl: '.trending-swiper-button-next',
        prevEl: '.trending-swiper-button-prev',
      },
      pagination: {
        el: '.trending-swiper-pagination',
        clickable: true,
      },
    });

    return () => {
      trendingSwiper.destroy();
    };
  }, [trendingSlidesPerView]);

  return (
    <div className="posters-list">
      <h3 style={{ paddingBottom: '30px' }}> Trending Now </h3>
      <div className="swiper-container trending-swiper-container">
        <div className="swiper-wrapper">
          {searchResults.map((data) => (
            <div key={data.imdbID} className="swiper-slide" style={{width: '100%'}}>
              <PosterCard data={data} onClick={handleClickTrendsPost} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination trending-swiper-pagination"></div>
        <div className="swiper-button-prev trending-swiper-button-prev"></div>
        <div className="swiper-button-next trending-swiper-button-next"></div>
      </div>
      <h3 style={{ paddingTop: '30px', paddingBottom: '30px'  }}> New Releases </h3> 
      <ul className="movies-grid movies-grid_trends">
        {searchResultsDuna.map((data) => (
          <div key={data.imdbID}>
            <PosterCard data={data} onClick={handleClickTrendsPost} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TrendsPage;

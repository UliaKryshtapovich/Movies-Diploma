import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import { getAllMovies, getMovie } from './services/MoviesService.js';
import "./index.css";
import App from "./components/app/App";
// import { getMovie, getMovieByTitle  } from '../src/services/MoviesService';


// getMovieByTitle('Inception') // названия фильма
//   .then(movie => console.log(movie))
//   .catch(error => console.error(error));


// getMovie('tt3896198') // идентификатора IMDb
//   .then(movie => console.log(movie))
//   .catch(error => console.error(error));


// getAllMovies().then(res => console.log(res));
// getMovie("tt2023587").then(res => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

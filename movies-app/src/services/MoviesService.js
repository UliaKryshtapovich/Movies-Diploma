import axios from "axios";
import RenderPosterCard from "../components/renderPosterCard/RenderPosterCard";

// const _apiBase = "http://www.omdbapi.com/";
// const _apiKey = "apikey=9be02b9c";

// нельзя полусить все фильмы  поэтому закидываем в useState - и его притягиваем к input (SEARCH)
//(NASTYA) изначально useState
//у input = пустой "" и делаем проверку - если пустой то пробросить переменную со строкой map и ищещь по ней,
// а если не пустой то используешь из search inputa значение

//(GETPOST)
//import {getPost, getSinglePost} from "../../"
// const [search, setSearch] = useState("txt");
// useEffect (() => {
//   getPost(search).then((data)=>{
//     console.log(data?.Search);
//     setPost(data?.Search)
//   });
// },
// []
// ) - сделать проверку если search = true то - передаем search, а если false то - "txt"

// чтобы получать id из постера и кидать в detailPage:
// const [singlePost, setSinglePost] = useState("mat");
// const handleClickPost = (imdbID) => {
//   console.log(imdbID);
//   getSinglePost(imdbID).then((data) => {
//     getSinglePost(data);
//     console.log(data);
//   });
// }; - в navigate закинуть id, а при переходе (NASTYA - когда кликаешь по посту то делаешь через Navigate  в функции,
// а потом на странице для 1 фильма делаем useEffect и запрос по getSinglePost(id) )


//redux можно использовать для подзагрузки постеров на странице при нажатии на show more (надо сначала отрисовать и сохранить в redux)

export async function getPost( // прокидываем через useEffect
  search = "",
  page = 1,
  type = null,
  year = null
) {
  try {
    const { data, status } = await axios.get(
      `https://www.omdbapi.com/?apikey=9be02b9c&s=${search}${page ? `&page=${page}` : ""}${
        type ? `&type=${type}` : ""
      }${year ? `&y=${year}` : ""}`, //  сразу вся сортировка
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log("response status is:", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error occurred";
    }
  }
}

export async function getSinglePost(id) {
  try {
    const { data, status } = await axios.get(`https://www.omdbapi.com/?apikey=9be02b9c&${id}`, {
      headers: {
        Accept: "application/json",
      },
    });
    console.log("response status is:", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error occurred";
    }
  }
}

// export async function getResource(url) {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//   }
//   return await res.json();
// }

// export async function getMovie() {
//   const url = `${_apiBase}?s=movie&${_apiKey}&page=1&y=2001&g=Series`;
//   return getResource(url);
// }

// export async function getMovie() {
//   const url = `${_apiBase}?s=movie&${_apiKey}&page=1`;
//   const moviesData = await getResource(url);
//   if (!moviesData || !moviesData.Search) {
//     throw new Error("Failed to fetch movies");
//   }
//   return moviesData.Search; // Возвращаем массив фильмов, а не объект
// }

// export async function getAllMovies() {
//   try {
//     const moviesData = await fetch(`${_apiBase}?s=movie&${_apiKey}`);
//     if (!moviesData.ok) {
//       throw new Error(`Could not fetch movies, status: ${moviesData.status}`);
//     }
//     const movies = await moviesData.json();
//     movies.Search.forEach((movie) => {
//       console.log(movie.Title);
//     });
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }
// }
// getAllMovies();

// export const getAllMovies = async (imdbID) => {
//   const res = await request (`${_apiBase}?s=movie&${_apiKey}&i=${imdbID}`);
//   return _transformMovies(res.data.results[0]);
// }

// export const _transformMovie = (movie) => {
//   return {
//     poster: movie.Poster,
//     ratings: movie.Ratings.map((rating) => ({
//       source: rating.Source,
//       value: rating.Value,
//     })),
//     year: movie.Year,
//     released: movie.Released,
//     plot: movie.Plot,
//     boxOffice: movie.BoxOffice,
//     country: movie.Country,
//     production: movie.Production,
//     actors: movie.Actors,
//     director: movie.Director,
//     writer: movie.Writer,
//     title: movie.Title,
//   };
// };

// export const _transformMovies = (movies) => {
//   return {
//     poster: movies.Poster,
//     ratings: movies.Ratings.map((rating) => ({
//       source: rating.Source,
//       value: rating.Value,
//     })),
//     title: movies.Title,
//     year: movies.Year,
//   };
// };

// const url = `${_apiBase}?s=movie&${_apiKey}&page=1&y=2001&g=Series`;

// export async function searchByTitle(title) {
//   const url = `https://www.omdbapi.com/?i=tt1285016&apikey=9be02b9c`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error searching by title:', error);
//     return null;
//   }
// }

// searchByTitle("The Lego Movie")
//   .then(data => {
//     console.log(data);
//     // Обработка полученных данных
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// /////////////////////////////////////

// export async function getMovieData(search) {
//   let url;
//   if (search.includes("tt")) {
//     // передан ID, делаем запрос по ID
//     url = `https://www.omdbapi.com/?i=${search}&${_apiKey}`;
//   } else {
//     // передано название, делаем запрос по названию
//     url = `https://www.omdbapi.com/?t=${encodeURIComponent(search)}&${_apiKey}`;
//   }

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error searching by title or ID:", error);
//     return null;
//   }
// }

// getMovieData("The Social Network")
//   .then((data) => {
//     console.log(data);
//     // Обработка полученных данных
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// getMovieData("tt0257106")
//   .then((data) => {
//     console.log(data);
//     // Обработка полученных данных
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

///////////////////////////////////////

// const movieTitle = "The Social Network";

// getMovieData(movieTitle)
//   .then((data) => {
//     // Получаем необходимые данные из объекта data
//     const posterUrl = data.Poster; // URL постера
//     const title = data.Title; // Название фильма
//     const rating = data.imdbRating; // Рейтинг фильма
//     const year = data.Year; // Год выпуска фильма
//     // Теперь вы можете использовать эти данные для отображения постера и другой информации
//     console.log("Poster URL:", posterUrl);
//     console.log("Title:", title);
//     console.log("Rating:", rating);
//     console.log("Year:", year);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

///////////////

// export async function getMovie() {
//   const url = `${_apiBase}?s=movie&${_apiKey}&page=1`;
//   return getResource(url);
// }





// <RenderPosterCard 
// Poster = {data.Poster}
// key={data.imdbID}
// onCklick={() => handleClickPost(dats.imdID)}
// Title={data.Ttitle}
// Year={data.Year}
// Type={data.Type}
// />
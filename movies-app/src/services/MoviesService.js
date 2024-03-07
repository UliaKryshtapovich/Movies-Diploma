const _apiBase = "http://www.omdbapi.com/";
const _apiKey = "apikey=9be02b9c";

export async function getResource(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
}

export async function getMovie() { 
  const url = (`${_apiBase}?s=movie&${_apiKey}&page=1&y=2001&g=Series`);
  return getResource(url);
}

export async function getAllMovies() {
  try {
    const moviesData = await fetch(`${_apiBase}?s=movie&${_apiKey}`);
    if (!moviesData.ok) {
      throw new Error(`Could not fetch movies, status: ${moviesData.status}`);
    }
    const movies = await moviesData.json();
    movies.Search.forEach(movie => {
      console.log(movie.Title);
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

getAllMovies();

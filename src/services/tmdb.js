const api_key = "1f73df03260922a55c491a298ae9f980";

// TRENDING ENDPOINT
export const getTrendingMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// POPULAR MOVIES
export const getPopularMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// GET MOVIE DETAIL
export const getSingleMovie = async (query) => {
  try {
    const url = `https://api.themoviedb.org/3//movie/${query}?api_key=${api_key}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// GET TV SHOWS
export const getSeries = async () => {
  try {
    const api_key = "1f73df03260922a55c491a298ae9f980";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

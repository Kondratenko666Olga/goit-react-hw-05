import axios from 'axios';

const API_KEY = '8e39dfd4412109274ab987d94d996ef5';
const BASE_URL = 'https://api.themoviedb.org/3';

let configuration = null;

const getConfiguration = async () => {
    if (!configuration) {
      const response = await axios.get(`${BASE_URL}/configuration?api_key=${API_KEY}`);
      configuration = response.data;
    }
    return configuration;
  };
  
  export const getImageUrl = (filePath, size = 'w500') => {
    if (!configuration) {
      throw new Error('Configuration has not been loaded.');
    }
    return `${configuration.images.base_url}${size}${filePath}`;
  };
  
  export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  };
  
  export const searchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
    return response.data;
  };
  
  export const getMovieDetails = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  };
  
  export const getMovieCredits = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data;
  };
  
  export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data;
  };
  
  getConfiguration();
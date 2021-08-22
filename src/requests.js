import React from 'react'

export const API_KEY ="c15840f2c9eca71dd49cc66156601807";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_keys=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchNowPlaying: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchGetPopular: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchGetUpcoming: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchGetLatest: `movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchMovieSearchResults: `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`,
    fetchLatestTv: `/tv/latest?api_key=${API_KEY}&language=en-US`,
    fetchAiringToday: `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopularTv: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRatedTv: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNowPlayingTv: `/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests;
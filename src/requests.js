const APIKEY = 'YOUR APIKEY';

const requests = {
    fetchTopActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchTopComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchTopHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchTopRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchTopScienceFictionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=878`,
    fetchTopDramaMovies: `/discover/movie?api_key=${APIKEY}&with_genres=18`,
    fetchTopFamilyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10751`,


};
export default requests;
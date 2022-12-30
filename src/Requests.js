const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ar-KSA`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=ar-KSA&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ar-KSA`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=ar-KSA&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&language=ar-KSA&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=ar-KSA&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&language=ar-KSA&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&language=ar-KSA&with_genres=99`,
    
    fetchWorkingTest:`/movie/5/recommendations?api_key=${API_KEY}&language=ar-KSA&page=1`,
};

export default requests;
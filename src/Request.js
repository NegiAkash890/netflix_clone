

const API_KEY = "9f503de129e7f3d274382b7c8ee68555" 


const requests = {
 fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
 fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
 fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
 fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
 fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
 
  
}


export default requests
export {API_KEY}


//https://api.themoviedb.org/3/trending/all/week?api_key=9f503de129e7f3d274382b7c8ee68555&language=en-US
// import React, { useEffect, useState } from 'react'
// const API_KEY = import.meta.env.VITE_API_KEY;

// function Movies() {
//   const [movieList, setMoviesList]= useState;
//   const getMovies= ()=>{
// fetch(`https://api.themoviedb.org/3/movie? ${API_KEY}`)
// .then(res => res.json())
// .then(jeson=>console.log(jeson.results));
//   }
  
//   useEffect(()=>{
// getMovies()
//   },[])
//     return (
//     <div>
// {movieList.map(()=>(
//    <img src ={``} />
// ))} 
//     </div>
//   )
// }

// export default Movies



import React, { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // w500 is the image size
import "./Movies.css";
// These are your provided API endpoints
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const promises = Object.values(requests).map(endpoint =>
          fetch(`${API_BASE_URL}${endpoint}`).then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
        );

        // Wait for all promises to resolve
        const [
          trending,
          netflix,
          topRated,
          action,
          comedy,
          horror,
          romance,
          docs,
        ] = await Promise.all(promises);

        setTrendingMovies(trending.results);
        setNetflixOriginals(netflix.results);
        setTopRated(topRated.results);
        setActionMovies(action.results);
        setComedyMovies(comedy.results);
        setHorrorMovies(horror.results);
        setRomanceMovies(romance.results);
        setDocumentaries(docs.results);

        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch movie data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) {
    return <div>Loading movies... 🎬</div>;
  }

  if (error) {
    return <div>Error: {error}. Please check your API key and network connection.</div>;
  }
  
  // The UI is broken into sections to display each movie list
  return (
    <div className="movies-container">
      <h2>Trending Now</h2>
      <div className="movie-row">
        {trendingMovies.map((movie) => (
          <img
            key={movie.id}
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="movie-poster"
          />
        ))}
      </div>

      <h2>Netflix Originals</h2>
      <div className="movie-row">
        {netflixOriginals.map((movie) => (
          <img
            key={movie.id}
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="movie-poster"
          />
        ))}
      </div>

      <h2>Top Rated</h2>
      <div className="movie-row">
        {topRated.map((movie) => (
          <img
            key={movie.id}
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="movie-poster"
          />
        ))}
      </div>

      <h2>Action Movies</h2>
      <div className="movie-row">
        {actionMovies.map((movie) => (
          <img
            key={movie.id}
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="movie-poster"
          />
        ))}
      </div>
      
      <h2>Comedy Movies</h2>
      <div className="movie-row">
        {comedyMovies.map((movie) => (
          <img
            key={movie.id}
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="movie-poster"
          />
        ))}
      </div>

      <h2>Horror Movies</h2>
      <div className="movie-row">
        {horrorMovies.map((movie) => (
          <img
            key={movie.id}
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="movie-poster"
          />
        ))}
      </div>

      <h2>Romance Movies</h2>
      <div className="movie-row">
        {romanceMovies.map((movie) => (
          <img
            key={movie.id}
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="movie-poster"
          />
        ))}
      </div>

      <h2>Documentaries</h2>
      <div className="movie-row">
        {documentaries.map((movie) => (
          <img
            key={movie.id}
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="movie-poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;

import React, { useEffect, useState } from 'react';
import "./Banner.css";
import axios from "../../utils/Axios";
import Requests from "../../utils/Requests";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(Requests.fetchAnimationNature);
  console.log("API data:", request.data.results); 
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );

      } catch (error) {
        console.log("Error fetching banner:", error);
      }
    })();
  }, []);


  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
backgroundImage: movie?.backdrop_path
  ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
  : movie?.poster_path
  ? `url("https://image.tmdb.org/t/p/original${movie.poster_path}")`
  : "none",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button>Play</button>
          <button>My List</button>
        </div>

        <div className="banner__description">
          <h1>{truncate(movie?.overview, 150)}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

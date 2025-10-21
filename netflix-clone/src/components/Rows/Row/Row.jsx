import React, { useEffect, useState } from "react";
import axios from "../../../utils/Axios";
import requests from "../../../utils/Requests";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        // 🔹 Skip movies that have no poster or backdrop path
        const filtered = response.data.results.filter(
          (movie) => (isLargeRow ? movie.poster_path : movie.backdrop_path)
        );
        setMovies(filtered);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    }
    fetchData();
  }, [fetchUrl, isLargeRow]);

function handleClick(movie) {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    const movieName =
      movie?.title || movie?.name || movie?.original_name || "";

    movieTrailer(movieName)
      .then((url) => {
        if (!url) {
          console.log("No trailer found for:", movieName);
          return;
        }
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => {
        console.log("Error finding trailer:", error);
      });
  }
}


const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleClick(movie)}
            src={`${baseImgUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>

      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;

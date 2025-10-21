import React, { useEffect, useState } from "react";
import axios from "../../utils/Axios";
import request from "../../utils/Requests";


const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
  async function fetchData() {
  const response = await axios.get(fetchUrl);
  setMovies(response.data.results);
}

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((movie) => (
  <img
    key={movie.id}
    className="row_poster"
    src={`${baseImgUrl}${movie.poster_path}`}
    alt={movie.name || movie.title}
  />
))}
      </div>
    </div>
  );
};

export default Row;

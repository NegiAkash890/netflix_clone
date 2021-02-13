import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters ">
        {movies.map((movie) => ( movie.backdrop_path)&&(
          <img
            className="row_poster"
            key={movie.id}
            src={`${base_url}${movie.backdrop_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;

import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

import { useHistory } from "react-router";

function Row({ title, fetchUrl }) {
  const history = useHistory();
 

  const base_url = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const handleClick =(movie)=>{
   
  
    history.push({pathname:"/Info",state:movie})
  }
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters ">
        {movies.map(
          (movie) =>{
            let movie_sel = movie
            return  (

              <img
                className="row_poster"
                onClick={()=> {handleClick(movie_sel);}}
                key={movie.id}
               
                src={`${base_url}${movie.backdrop_path}`}
              />
            )
            })}
      </div>
    </div>
  );
}

export default Row;

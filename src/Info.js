import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./Info.css";
import youtube from "./screens/youtube";

function Info() {
  let movie_details = window.history.state.state;
  const [video, setVideoId] = useState(' ');
  useEffect(() => {
    const title = movie_details.title ||
            movie_details["original_title"] ||
            movie_details["original_name"]
    console.log(title);
    youtube
      .get("/search", {
        params: { q: title + " netflix" },
      })
      .then((res) => {
        console.log(res.data.items[0].id["videoId"]);
        setVideoId(res.data.items[0].id["videoId"]);
      });
  }, []);

  return (
    <div className="movie_info">
      <Nav />
      <div
        className="movie_summary"
        >
         <iframe
          src={`https://www.youtube.com/embed/${video}?autoplay=1&showinfo=0&controls=0`}
          frameBorder="0"
          ></iframe>
      </div>
      <div className="movie_details">
        <p className="movie_title">
          {" "}
          {movie_details.title ||
            movie_details["original_title"] ||
            movie_details["original_name"]}
        </p>
      </div>
      <div className="rating_and_review">
        <h1>Summary</h1>
        <p>{movie_details.overview}</p>
      </div>
    </div>
  );
}

export default Info;

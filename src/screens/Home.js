import React from "react";
import Banner from "../Banner";
import "./Home.css";
import Nav from "../Nav";
import requests from '../Request'
import Row from '../Row'
function Home() {
  return (
    <div className="home">
      {/* Navbar*/}
      <Nav />
      <Banner />
      <Row title='Netflix Originals' fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentary' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default Home;

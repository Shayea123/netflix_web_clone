import React from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import "./HomeScreen.css";
import requests from "./Requests";
import Row from "./components/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="أكثر مشاهدات" fetchUrl={requests.fetchTrending} arabic />
      <Row title="سهرة الليلة" fetchUrl={requests.fetchTopRated} arabic/>
      <Row title="المسلسلات" fetchUrl={requests.fetchActionMovies} arabic/>
      <Row title="أفلام الكوميديا" fetchUrl={requests.fetchComedyMovies} arabic/>
      <Row title="أفلام الرعب" fetchUrl={requests.fetchHorrorMovies} arabic/>
      <Row title="أفلام الرومنسية" fetchUrl={requests.fetchRomanceMovies} arabic/>
      <Row title="وثائقية" fetchUrl={requests.fetchDocumentaries} arabic/>
    </div>

    // --------------------
    // Rows
  );
}

export default HomeScreen;

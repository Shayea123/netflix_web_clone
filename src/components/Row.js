import axios from "../axios";
import React, { useState, useEffect } from "react";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false, arabic = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  // console.log(movies);

  return (
    <div className="row">
      <h2 className={`row ${arabic && "row__title_arabic"}`}>{title}</h2>
      <div className={`row__posters ${arabic && "row__posters_arabic"}`}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div className="row__card_poster" key={movie.id}>
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"} `}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <div className="img_shadow" />
                <div className="row__name_div">
                  <h2 className="row__h2_name">
                    {truncate(
                      movie?.title || movie?.name || movie?.original_name,
                      20
                    )}
                  </h2>
                </div>
                <div className="row__rate_div">
                  <h3 className="row__h3_rate">
                    {movie.vote_average.toFixed(1)}
                  </h3>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Row;

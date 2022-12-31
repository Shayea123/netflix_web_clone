import axios from "../axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import SkeletonCard from "./SkeletonCard";

function Row({ title, fetchUrl, arabic = false }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMovie, setActiveMovie] = useState(null);
  const [isclicked, setisclicked] = useState(true);

  // function onClickedActive() {
  //   setisclicked(!isclicked);
  // }

  console.log(activeMovie);
  console.log(`isclicked value :${isclicked}`);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    console.log("fetchData called");
    setLoading(true);
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setLoading(false);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const movieExpoanded = (id) => {
    setisclicked(!isclicked);
    setActiveMovie(isclicked ? id : null);
  };

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  // console.log(movies);

  return (
    <div className="row">
      <h2 className={`row ${arabic && "row__title_arabic"}`}>{title}</h2>
      <div className={`row__posters ${arabic && "row__posters_arabic"}`}>
        {movies.map((movie) =>
          loading ? (
            <SkeletonCard />
          ) : (
            (movie.poster_path || <SkeletonCard />) && (
              <div className="row__card_poster" key={movie.id}>
                <img
                  onClick={() => movieExpoanded(movie.id)}
                  className={`row__poster  ${
                    movie.id === activeMovie ? "img_activate" : "row__poster "
                  }`}
                  key={movie.id}
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                />
                {movie.id === activeMovie && (
                  <div className="play-btn">
                    {/* هنا ضع لنك للافلام */}
                    <i className="fas fa-play" key={movie.id}></i>
                  </div>
                )}
                <div
                  className={`img_shadow ${
                    activeMovie === movie.id ? "shadow_activate" : "img_shadow"
                  }`}
                />
                <div
                  className={`row__name_div ${
                    activeMovie === movie.id
                      ? "div_name_activate"
                      : "row__name_div"
                  }`}
                  onClick={() => movieExpoanded(movie.id)}
                >
                  <h2
                    className={`row__h2_name ${
                      activeMovie === movie.id
                        ? "h2_name_active"
                        : "row__h2_name"
                    }`}
                  >
                    {truncate(
                      movie?.title || movie?.name || movie?.original_name,
                      20
                    )}
                  </h2>
                </div>
                <div
                  className={`row__rate_div ${
                    activeMovie === movie.id ? "rate_activate" : "row__rate_div"
                  }`}
                  onClick={() => movieExpoanded(movie.id)}
                >
                  <h3 className="row__h3_rate">
                    {movie.vote_average.toFixed(1)}
                  </h3>
                </div>
                {movie.id === activeMovie && (
                  <div className="row__desc_div" onClick={() => movieExpoanded(movie.id)}>
                    <h3 className="row__h3_desc">
                      {truncate(movie?.overview, 150)}
                    </h3>
                  </div>
                )}
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default Row;

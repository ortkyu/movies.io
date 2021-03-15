import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Loader } from "./Loader";
import style from "./moveItem.module.css";

export const MovieInfo = withRouter(({ match }) => {
  let id = match.params.id;

  const [movie, setMovie] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4237669ebd35e8010beee2f55fd45546`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => {
        setMovie(false);
        console.log("errorFetch", err);
      });
  }, []);

  const setFavorit = () => {
    localStorage.setItem("favorit", JSON.stringify(id));
  };

  if (!movie) {
    <Loader />;
  }
  return (
    <>
      <div className={style.wrapper}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="image null"
          />
        </div>
        <div>{movie.original_title}</div>
        <div onClick={setFavorit}>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="22px"
            height="22px"
            viewBox="0 0 612 612"
          >
            <path
              d="M459,18.075c-63.743,0-111.977,37.409-153,76.5c-39.091-41.482-89.256-76.5-153-76.5c-89.773,0-153,77.188-153,161.358
                c0,45.154,18.494,77.686,38.747,108.228l237.781,285.077c26.699,28.248,31.729,28.248,58.427,0l238.316-285.077
                C597.082,257.119,612,224.587,612,179.433C612,95.264,548.772,18.075,459,18.075z M535.5,279.744L306,553.575L76.5,278.615
                c-27.444-38.154-38.25-63.896-38.25-99.182c0-65.752,46.952-124.944,114.75-125.499c55.769-0.459,118.977,56.495,153,99.431
                c33.125-41.444,97.231-99.431,153-99.431c66,0,114.75,59.747,114.75,125.499C573.75,214.719,565.201,242.373,535.5,279.744z"
            />
          </svg>
        </div>
        <div>{movie.overview}</div>
      </div>
    </>
  );
});

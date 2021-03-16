import InfiniteScroll from "react-infinite-scroll-component";
import { Paginator } from "./Paginataor";
import { Loader } from "./Loader";
import { MovieItem } from "./MovieItem";
import { MovieContext } from "../App";
import { useContext } from "react";
import "../App.css";

export const MovieList = () => {
  const {
    movies,
    loadMoviesToScroll,
  } = useContext(MovieContext);

  return (
    <>
      <div className={"body"}>
        <div className={"wrap_paginnation"}>
          <Paginator />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movies.results.length}
        next={loadMoviesToScroll}
        hasMore={true}
        loader={<Loader />}
      >
        <div name="test3" className={"listMovie"}>
          {movies.results &&
            movies.results.map((movie) => (
              <div key={movie.id}>
                <MovieItem movie={movie} />
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

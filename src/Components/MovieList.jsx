import InfiniteScroll from "react-infinite-scroll-component";
import { Paginator } from "./Paginataor";
import { Loader } from "./Loader";
import { MovieItem } from "./MovieItem";
import "../App.css";

export const MovieList = ({
  idsFavoriteMovie,
  setFavoriteMovie,
  movies,
  setnumberPage,
  numberPage,
  loadMoviesToPagination,
  loadMoviesToScroll,
}) => {
  return (
    <>
      <div className={"body"}>
        <div className={"wrap_paginnation"}>
          <Paginator
            setnumberPage={setnumberPage}
            page={numberPage}
            loadMoviesToPagination={loadMoviesToPagination}
            total_pages={movies.total_pages}
          />
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
                <MovieItem movie={movie} idsFavoriteMovie={idsFavoriteMovie} setFavoriteMovie={setFavoriteMovie}/>
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

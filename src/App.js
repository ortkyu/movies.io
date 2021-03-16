import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { MovieList } from "./Components/MovieList";
import { Navbar } from "./Components/Navbar";
import { Loader } from "./Components/Loader";
import { MovieInfo } from "./Components/MoviInfo";
import "./App.css";

export const MovieContext = React.createContext();

function App() {
  const [numberPage, setnumberPage] = useState(1);
  const [sortOption, setsortOption] = useState("popularity.desc");
  const [genre, setGenre] = useState("35");

  const [loading, setloading] = useState(false);
  const [movies, setMovies] = useState({
    page: numberPage,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const [idsFavoriteMovie, setFavoriteMovie] = useState([]);

  const setFavorit = (id) => {
    setFavoriteMovie([...idsFavoriteMovie, id]);
  };
  const deleteFavorit = (id) => {
    setFavoriteMovie(idsFavoriteMovie.filter((i) => i !== id));
  };

  useEffect(() => {
    const data = localStorage.getItem("favorit");
    data && setFavoriteMovie(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorit", JSON.stringify(idsFavoriteMovie));
  }, [setFavorit, deleteFavorit]);

  const loadMoviesToPagination = (p = 1) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&page=${p}&sort_by=${sortOption}&api_key=4237669ebd35e8010beee2f55fd45546`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setnumberPage(data.page);
      })
      .catch((err) => console.log("errorFetch", err))
      .finally(setloading(true));
  };

  const loadMoviesToScroll = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?page=${
        numberPage + 1
      }&sort_by=${sortOption}&api_key=4237669ebd35e8010beee2f55fd45546`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies({
          page: data.page,
          results: [...movies.results, ...data.results],
          total_pages: data.total_pages,
          total_results: data.total_results,
        });
        setnumberPage(numberPage + 1);
      })
      .catch((err) => console.log("errorFetch", err))
      .finally(setloading(true));
  };

  useEffect(() => {
    loadMoviesToPagination();
  }, [setsortOption, sortOption, setGenre, genre]);

  if (!loading) {
    <Loader />;
  }

  return (
    <BrowserRouter>
      <MovieContext.Provider
        value={{
          genre,
          setGenre,
          sortOption,
          deleteFavorit,
          setFavorit,
          numberPage,
          idsFavoriteMovie,
          setFavoriteMovie,
          loadMoviesToPagination,
          loadMoviesToScroll,
          setnumberPage,
          setsortOption,
          movies,
        }}
      >
        <div>
          <Header />
          <Navbar />
          <Route exact path="/" component={MovieList} />
          <Route path="/movie/:id" component={MovieInfo} />
        </div>
      </MovieContext.Provider>
    </BrowserRouter>
  );
}

export default App;

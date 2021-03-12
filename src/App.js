import React, {useState, useEffect} from "react"
import './App.css';
import { Header } from "./Components/Header";
import { MovieList } from "./Components/MovieList";
import { Navbar } from "./Components/Navbar";
import { Paginator } from "./Components/Paginataor";

function App() {



const [movies, setMovies] = useState([])
const [sortOption, setsortOption] = useState('popularity.desc')


const loadMovies = (numberPage=1) => {
  fetch(`https://api.themoviedb.org/3/discover/movie?page=${numberPage}&sort_by=${sortOption}&api_key=4237669ebd35e8010beee2f55fd45546`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    setMovies(data)
  })
  .catch(err=>console.log("errorFetch", err))
}


useEffect(()=>{
  loadMovies()
}, [sortOption])


  return (
    <>
    <Header/>
    <Navbar setsortOption={setsortOption}  loadMovies={loadMovies}/>
    <Paginator sortOption={sortOption} page={movies.page} loadMovies={loadMovies} total_pages={movies.total_pages}/>
    <div className={'listMovie'} >
        { movies.results && movies.results.map(movie=> 
        <div key={movie.id}>
              <MovieList movie={movie}/>
        </div>
          )}
          </div>
    </>
  );
}

export default App;

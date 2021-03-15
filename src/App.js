import React, {useState, useEffect, useRef, useCallback} from "react"
import './App.css';
import { Header } from "./Components/Header";
import { MovieList } from "./Components/MovieList";
import { Navbar } from "./Components/Navbar";
import { Paginator } from "./Components/Paginataor";
import InfiniteScroll from "react-infinite-scroll-component"



function App() {
  let myRef = useRef()

  const [numberPage, setnumberPage] = useState(1)
  const [paginator, setPaginator] = useState(false)

  const [loading, setloading] = useState(false)
  const [movies, setMovies] = useState({
  page: numberPage,
  results: [],
  total_pages: 0,
  total_results: 0,
})

const [sortOption, setsortOption] = useState('popularity.desc')

// useEffect(()=>{
//   document.addEventListener('scroll', handleScroll)
//   return () => document.removeEventListener('scroll', handleScroll)
// }, [])
// const handleScroll = (e) => {
//   if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)<50) {
//   setTimeout(() => setloading(true), 500)
//     }
//   }


  let loadMovies = (p=1) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?page=${p}&sort_by=${sortOption}&api_key=4237669ebd35e8010beee2f55fd45546`)
    .then(res=>res.json())
    .then(data=>{
      setMovies(data)
       setloading(false)
          setloading(true)
      setTimeout(() => setnumberPage(data.page), 700)
      setTimeout(() => setPaginator(false), 700)
    })
    .catch(err=>console.log("errorFetch", err))
  }

let loadFilms = () => {
  fetch(`https://api.themoviedb.org/3/discover/movie?page=${numberPage+1}&sort_by=${sortOption}&api_key=4237669ebd35e8010beee2f55fd45546`)
  .then(res=>res.json())
  .then(data=>{
    setMovies({
      page: data.page,
      results: [...movies.results, ...data.results],
      total_pages: data.total_pages,
      total_results: data.total_results,
  })
    //setloading(false)
    setnumberPage(data.page)
  })
  .catch(err=>console.log("errorFetch", err))
}



useEffect(() => {
 if (loading) {
  loadFilms()
}
}, [loading])

useEffect(()=>{
  loadMovies()
}, [sortOption])

let handlerScroll = () => {
 if (!paginator) {
    loadFilms()
  }
  //setnumberPage(numberPage+1)
}
console.log(paginator)

  return (
    <div >
    <Header/>
    <Navbar setsortOption={setsortOption}  loadMovies={loadMovies}/>
    <div className={'body'}>
    <div className={'wrap_paginnation'}>
      <Paginator setPaginator={setPaginator} sortOption={sortOption} setnumberPage={setnumberPage} page={numberPage} loadMovies={loadMovies} total_pages={movies.total_pages}/>
    </div>
    </div>
    <InfiniteScroll
                    dataLength={movies.results.length}
                    next={handlerScroll}
                    hasMore={true}
                    loader={<h1>Loading...</h1>}>
    <div name="test3" className={'listMovie'} >
        { movies.results && movies.results.map((movie,i)=> 
        <div ref={myRef} key={i}>
              <MovieList movie={movie}/>
        </div>
          )}
    </div>
    </InfiniteScroll>
    </div>
  );
}

export default App;

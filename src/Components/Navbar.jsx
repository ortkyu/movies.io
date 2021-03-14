import React from 'react'
import style from'./navbar.module.css'


//&certification=R&

export const Navbar = React.memo(function Navbar({setsortOption, loadMovies}) {

    
    return(
        <div className={style.wrapper}>
           <div>Сортировать по :</div>
           <div>популярности</div>
           <span onClick={()=>setsortOption('vote_average.asc')}>&#8593;</span>
           <span onClick={()=>setsortOption('vote_average.desc')}>&#8595;</span>
           <div>рейтингу</div>
           <span onClick={()=>setsortOption('popularity.asc')}>&#8593; </span>
           <span onClick={()=>setsortOption('popularity.desc')}>&#8595;</span>
           <div>дате</div>
           <span onClick={()=>setsortOption('release_date.asc')} >&#8593; </span>
           <span onClick={()=>setsortOption('release_date.desc')}>&#8595;</span>
        </div>
    )
})
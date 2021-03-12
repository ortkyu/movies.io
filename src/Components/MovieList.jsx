import style from './movelist.module.css'





export const MovieList = ({movie}) => {


    return(
        <div className={style.wrapper}>
              <div><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="image null"/></div>
              <div>{movie.original_title}</div>
              <div>O</div>
              <div>{}</div>
        </div>
    )
}
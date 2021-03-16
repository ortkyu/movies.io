import React from "react";
import style from "./navbar.module.css";
import { MovieContext } from "../App";
import { useContext, useState } from "react";

export const Navbar = () => {
  const { sortOption, setsortOption, genre, setGenre } = useContext(
    MovieContext
  );

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [openGenre, setOpenGenre] = useState(false);
  const toggleGenre = () => setOpenGenre(!openGenre);
  const handleClickSort = (e) => {
    setsortOption(e.target.id);
  };

  const handleClickGanre = (e) => {
    setGenre(e.target.id);
  };

  return (
    <div>
      <div className={style.wrapper}>
        <div>
          <div onClick={toggle} className={style.sort}>
            Сортировать&nbsp; v
          </div>
          {open && (
            <div onClick={(e) => handleClickSort(e)} className={style.nameSort}>
              <div>популярности</div>
              <span
                id="vote_average.asc"
                className={sortOption === "vote_average.asc" && style.active}
              >
                &#8593;
              </span>
              <span
                id="vote_average.desc"
                className={sortOption === "vote_average.desc" && style.active}
              >
                &#8595;
              </span>
              <div>рейтингу</div>
              <span
                id="popularity.asc"
                className={sortOption === "popularity.asc" && style.active}
              >
                &#8593;
              </span>
              <span
                id="popularity.desc"
                className={sortOption === "popularity.desc" && style.active}
              >
                &#8595;
              </span>
              <div>дате</div>
              <span
                id="release_date.asc"
                className={sortOption === "release_date.asc" && style.active}
              >
                &#8593;
              </span>
              <span
                id="release_date.desc"
                className={sortOption === "release_date.desc" && style.active}
              >
                &#8595;
              </span>
            </div>
          )}
        </div>
        <div>
          <div className={style.sort} onClick={toggleGenre}>
            Жанры&nbsp; v
          </div>
          {openGenre && (
            <div
              className={style.nameSort}
              onClick={(e) => handleClickGanre(e)}
            >
              <div className={genre === "35" && style.active} id="35">
                комедия
              </div>
              <div className={genre === "28" && style.active} id="28">
                боевик
              </div>
              <div className={genre === "10752" && style.active} id="10752">
                военный
              </div>
              <div className={genre === "37" && style.active} id="37">
                вестерн
              </div>
              <div className={genre === "53" && style.active} id="53">
                триллер
              </div>
              <div className={genre === "36" && style.active} id="36">
                исторический
              </div>
              <div className={genre === "99" && style.active} id="99">
                документальный
              </div>
              <div className={genre === "12" && style.active} id="12">
                приключения
              </div>
              <div className={genre === "18" && style.active} id="18">
                драма
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

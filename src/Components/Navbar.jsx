import React from "react";
import style from "./navbar.module.css";
import { MovieContext } from "../App";
import { useContext, useState } from "react";

export const Navbar = () => {
  const { setsortOption, sortOption } = useContext(MovieContext);

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.sort}>Сортировать :</div>
        <div className={style.nameSort}>
          <div>популярности</div>
          <span
            className={sortOption === "vote_average.asc" && style.active}
            onClick={() => setsortOption("vote_average.asc")}
          >
            &#8593;
          </span>
          <span
            className={sortOption === "vote_average.desc" && style.active}
            onClick={() => setsortOption("vote_average.desc")}
          >
            &#8595;
          </span>
          <div>рейтингу</div>
          <span
            className={sortOption === "popularity.asc" && style.active}
            onClick={() => setsortOption("popularity.asc")}
          >
            &#8593;
          </span>
          <span
            className={sortOption === "popularity.desc" && style.active}
            onClick={() => setsortOption("popularity.desc")}
          >
            &#8595;
          </span>
          <div>дате</div>
          <span
            className={sortOption === "release_date.asc" && style.active}
            onClick={() => setsortOption("release_date.asc")}
          >
            &#8593;
          </span>
          <span
            className={sortOption === "release_date.desc" && style.active}
            onClick={() => setsortOption("release_date.desc")}
          >
            &#8595;
          </span>
        </div>
        <div></div>
      </div>
      <div className={style.mobile}>
        <div onClick={toggle} className={style.sort}>
          Сортировать :
        </div>
        <div className={open ? style.nameSort : style.mobileHide}>
          <div>популярности</div>
          <span
            className={sortOption === "vote_average.asc" && style.active}
            onClick={() => setsortOption("vote_average.asc")}
          >
            &#8593;
          </span>
          <span
            className={sortOption === "vote_average.desc" && style.active}
            onClick={() => setsortOption("vote_average.desc")}
          >
            &#8595;
          </span>
          <div>рейтингу</div>
          <span
            className={sortOption === "popularity.asc" && style.active}
            onClick={() => setsortOption("popularity.asc")}
          >
            &#8593;
          </span>
          <span
            className={sortOption === "popularity.desc" && style.active}
            onClick={() => setsortOption("popularity.desc")}
          >
            &#8595;
          </span>
          <div>дате</div>
          <span
            className={sortOption === "release_date.asc" && style.active}
            onClick={() => setsortOption("release_date.asc")}
          >
            &#8593;
          </span>
          <span
            className={sortOption === "release_date.desc" && style.active}
            onClick={() => setsortOption("release_date.desc")}
          >
            &#8595;
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

import style from "./paginator.module.css";
import { useEffect, useMemo, useState } from "react";
import { MovieContext } from "../App";
import { useContext } from "react";

export function Paginator() {
  const {
    movies,
    setnumberPage,
    numberPage,
    loadMoviesToPagination,
  } = useContext(MovieContext);

  const onPageChanged = (p) => {
    window.scrollTo(0, 0);
    loadMoviesToPagination(p);
    setnumberPage(p);
  };
  let total_pages = movies.total_pages;
  const page = numberPage;

  let portionSize = 5;
  let portionCount = Math.ceil(total_pages / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  useEffect(() => {
    if (page > rightPortionPageNumber) {
      setPortionNumber(portionNumber + 1);
    }
    if (page < leftPortionPageNumber) {
      setPortionNumber(portionNumber - 1);
    }
  }, [page]);

  const pages = [];
  for (let i = 1; i <= total_pages; i++) {
    pages.push(i);
  }

  return (
    <div className={style.pagination}>
      <div>
        {portionNumber > 1 && (
          <div
            onClick={() => {
              setPortionNumber(portionNumber - 1);
              onPageChanged(leftPortionPageNumber - 1);
            }}
          >
            пред
          </div>
        )}
        <div>
          {pages
            .filter(
              (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
            )
            .map((p) => {
              return (
                <span
                  className={
                    page === p ? style.selectNumberPage : style.numberPage
                  }
                  key={p}
                  onClick={(e) => {
                    onPageChanged(p);
                  }}
                >
                  {p}
                </span>
              );
            })}
        </div>
        {portionCount > portionNumber && (
          <div
            onClick={() => {
              setPortionNumber(portionNumber + 1);
              onPageChanged(rightPortionPageNumber + 1);
            }}
          >
            след
          </div>
        )}
      </div>
    </div>
  );
}

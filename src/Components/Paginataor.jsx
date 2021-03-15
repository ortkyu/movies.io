import style from'./paginator.module.css'
import { useState } from "react";





export function Paginator({
    sortOption,
  page,
  setnumberPage,
  total_pages,
  loadMovies,
  setPaginator
}) {

  let onPageChanged = (p) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    loadMovies(p)
    setnumberPage(p)
      setPaginator(true)
  };

  let portionSize = 5;
  let portionCount = Math.ceil(total_pages / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  let pages = [];
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
              onPageChanged(leftPortionPageNumber-1)
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
              onPageChanged(rightPortionPageNumber+1)
            }}
          >
            след
          </div>
        )}
      </div>
    </div>
  );
}
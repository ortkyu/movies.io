import style from "./header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className={style.wrapper}>
        <Link to="/">
          <h1>The Movies </h1>
        </Link>
      </div>
    </>
  );
};

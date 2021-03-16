import style from "./header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className={style.wrapper}>
        <NavLink to="/">
          <h1>The Movies </h1>
        </NavLink>
      </div>
    </>
  );
};

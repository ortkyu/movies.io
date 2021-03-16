import s from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={s.wrapSpinner}>
      <div className={s.loadingSpinner}>
        <div className={s.loadSpin}>
          <div></div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
import style from "./Arrow.module.css";
import arrow from "../../images/arrow.svg";

const Arrow = ({ directionSort }) => {
  return directionSort ? (
    <img className={style.arrowUp} src={arrow} alt="arrow" />
  ) : (
    <img className={style.arrowDown} src={arrow} alt="arrow" />
  );
};

export default Arrow;

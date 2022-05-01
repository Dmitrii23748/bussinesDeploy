import { useDispatch, useSelector } from "react-redux";
import { stateInput } from "../../redux/slices/postSlice";
import search from "../../images/search.svg";
import style from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const { valueInput } = useSelector((state) => state.posts);

  const addSearchFunc = (e) => {
    dispatch(stateInput(e.target.value));
  };

  return (
    <div className={style.searchBlock}>
      <input
        className={style.searchInput}
        type="text"
        value={valueInput}
        onChange={addSearchFunc}
      />
      <button className={style.searchBtn} type="button">
        <img className={style.searchicture} src={search} alt="search" />
      </button>
    </div>
  );
};

export default Search;

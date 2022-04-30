import search from "../../images/search.svg";
import style from "./Search.module.css";

const Search = ({ searchItem, setSearchItem }) => {
  return (
    <div className={style.searchBlock}>
      <input
        className={style.searchInput}
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button className={style.searchBtn} type="button">
        <img className={style.searchicture} src={search} alt="search" />
      </button>
    </div>
  );
};

export default Search;

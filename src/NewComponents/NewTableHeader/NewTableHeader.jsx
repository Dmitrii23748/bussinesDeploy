import { useDispatch } from "react-redux";
import { useState } from "react";
import { sortPostsDown, sortPostsUp } from "../../redux/slices/postSlice";
import Arrow from "../../Components/Arrow/Arrow";
import style from "./NewTable.module.css";

const NewTableHeader = () => {
  const dispatch = useDispatch();

  const [directionSort, setDirectionSort] = useState(true);
  const [column, setColumn] = useState("id");

  const sortDate = (params) => {
    if (directionSort) {
      dispatch(sortPostsUp(params));
    } else {
      dispatch(sortPostsDown(params));
    }
    setDirectionSort(!directionSort);
    setColumn(params);
  };
  return (
    <thead>
      <tr>
        <th className={style.tableHeader} onClick={() => sortDate("id")}>
          ID
          {column === "id" && <Arrow directionSort={directionSort} />}
        </th>
        <th className={style.tableHeader} onClick={() => sortDate("title")}>
          Заголовок
          {column === "title" && <Arrow directionSort={directionSort} />}
        </th>
        <th className={style.tableHeader} onClick={() => sortDate("body")}>
          Описание
          {column === "body" && <Arrow directionSort={directionSort} />}
        </th>
      </tr>
    </thead>
  );
};

export default NewTableHeader;

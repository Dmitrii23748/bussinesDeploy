import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortPostsDown, sortPostsUp } from "../../redux/slices/postSlice";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import TablePosts from "../TablePosts/TablePosts";
import Arrow from "../Arrow/Arrow";
import style from "./Table.module.css";

const Table = () => {
  const dispatch = useDispatch();
  const { allPosts, valueInput, status, error } = useSelector(
    (state) => state.posts
  );

  const [directionSort, setDirectionSort] = useState(true);
  const [column, setColumn] = useState("id");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPage] = useState(10);

  const filtersArrayData = allPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(valueInput.toLowerCase()) ||
      post.body.toLowerCase().includes(valueInput.toLowerCase()) ||
      String(post.id).includes(valueInput)
    );
  });

  const lastPostIndex = currentPage * postsPage;
  const firstPostIndex = lastPostIndex - postsPage;

  const paginate = (pageNum) => setCurrentPage(pageNum);

  const nextPage = () => {
    if (currentPage <= postsPage - 1) {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage(postsPage);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage(1);
    }
  };

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
    <>
      <Search />
      <div className={style.tableWrap}>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.tableHeader} onClick={() => sortDate("id")}>
                ID
                {column === "id" && <Arrow directionSort={directionSort} />}
              </th>
              <th
                className={style.tableHeader}
                onClick={() => sortDate("title")}
              >
                Заголовок
                {column === "title" && <Arrow directionSort={directionSort} />}
              </th>
              <th
                className={style.tableHeader}
                onClick={() => sortDate("body")}
              >
                Описание
                {column === "body" && <Arrow directionSort={directionSort} />}
              </th>
            </tr>
          </thead>
          <tbody>
            {status === "resolved" &&
              allPosts &&
              filtersArrayData
                .slice(firstPostIndex, lastPostIndex)
                .map((post) => {
                  return <TablePosts post={post} key={post.id} />;
                })}
            {status === "rejected" && (
              <tr>
                <td>{error}</td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          postsPage={postsPage}
          totalPosts={allPosts.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Table;

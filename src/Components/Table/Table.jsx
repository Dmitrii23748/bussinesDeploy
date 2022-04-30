import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";
import TablePosts from "../TablePosts/TablePosts";
import Arrow from "../Arrow/Arrow";
import style from "./Table.module.css";

const Table = () => {
  const { allPosts, status, error } = useSelector((state) => state.posts);

  const [allPostsState, setAllPostState] = useState([]);
  const [directionSort, setDirectionSort] = useState(true);
  const [column, setColumn] = useState("id");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPage] = useState(10);

  const [searchItem, setSearchItem] = useState("");

  const filtersArrayData = allPostsState.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      post.body.toLowerCase().includes(searchItem.toLowerCase()) ||
      String(post.id).includes(searchItem)
    );
  });

  const lastPostIndex = currentPage * postsPage;
  const firstPostIndex = lastPostIndex - postsPage;
  const currentPost = filtersArrayData.slice(firstPostIndex, lastPostIndex);

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
    let sortDateArray;
    if (directionSort) {
      sortDateArray = allPostsState.sort((a, b) => {
        return a[params] < b[params] ? 1 : -1;
      });
    } else {
      sortDateArray = allPostsState.sort((a, b) => {
        return a[params] > b[params] ? 1 : -1;
      });
    }
    setAllPostState(sortDateArray);
    setDirectionSort(!directionSort);
    setColumn(params);
  };

  useEffect(() => {
    setAllPostState([...allPosts]);
  }, [allPosts]);

  return (
    <>
      <Search searchItem={searchItem} setSearchItem={setSearchItem} />
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
              allPostsState &&
              currentPost.map((post) => {
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

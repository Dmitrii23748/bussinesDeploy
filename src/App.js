/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/slices/postSlice";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import style from "./App.module.css";
import MainPages from "./Pages/MainPages";
import PageOne from "./Pages/PageOne";
import Search from "./Components/Search/Search";

function App() {
  const dispatch = useDispatch();

  const { allPosts, valueInput } = useSelector((state) => state.posts);

  const local = useLocation();

  const [numberPage, setNumberPage] = useState(
    Number(local.pathname.slice(1, 2)) + 1
  );



  const nextPageClick = () => {
    setNumberPage((prev) => Number(prev) + 1);
    if (numberPage === 9) {
      setNumberPage(9);
    }
  };

  const prevPageClick = () => {
    setNumberPage((prev) => Number(prev) - 1);
    if (numberPage === 1) {
      setNumberPage(1);
    }
  };

  const filtersArrayData = allPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(valueInput.toLowerCase()) ||
      post.body.toLowerCase().includes(valueInput.toLowerCase()) ||
      String(post.id).includes(valueInput)
    );
  });

  const arrLink = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");

  useEffect(() => {
    if (local.pathname.slice(1, 2) === "1") {
      setFirstNum(0);
      setSecondNum(10);
    } else if (local.pathname.slice(1, 2) === "2") {
      setFirstNum(10);
      setSecondNum(20);
    } else if (local.pathname.slice(1, 2) === "3") {
      setFirstNum(20);
      setSecondNum(30);
    } else if (local.pathname.slice(1, 2) === "4") {
      setFirstNum(30);
      setSecondNum(40);
    } else if (local.pathname.slice(1, 2) === "5") {
      setFirstNum(40);
      setSecondNum(50);
    } else if (local.pathname.slice(1, 2) === "6") {
      setFirstNum(50);
      setSecondNum(60);
    } else if (local.pathname.slice(1, 2) === "7") {
      setFirstNum(60);
      setSecondNum(70);
    } else if (local.pathname.slice(1, 2) === "8") {
      setFirstNum(70);
      setSecondNum(80);
    } else if (local.pathname.slice(1, 2) === "8") {
      setFirstNum(80);
      setSecondNum(90);
    } else if (local.pathname.slice(1, 2) === "9") {
      setFirstNum(90);
      setSecondNum(100);
    }
  }, [local.pathname.slice(1, 2)]);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="container">
        <Search />
        <div className={style.tableWrap}>
          <table className={style.table}>
            <Routes>
              <Route
                path="/"
                element={<MainPages filtersArrayData={filtersArrayData} />}
              />
              {arrLink.map((page, index) => {
                return (
                  <Route
                    key={index}
                    path={`/${local.pathname.slice(1, 2)}`}
                    element={
                      <PageOne
                        filtersArrayData={filtersArrayData}
                        firstNum={firstNum}
                        secondNum={secondNum}
                      />
                    }
                  />
                );
              })}
            </Routes>
          </table>
        </div>
        <div className={style.paginateBlock}>
          <Link
            className={style.paginateButtons}
            to={`/${String(numberPage)}`}
            onClick={prevPageClick}
          >
            Назад
          </Link>
          <ul className={style.paginateList}>
            {arrLink.map((link, index) => {
              return (
                <li className={style.paginateItemLi} key={index}>
                  <NavLink
                    to={`/${link}`}
                    className={({ isActive }) =>
                      isActive ? style.activeLink : style.paginateBtn
                    }
                    onClick={() => setNumberPage(link)}
                  >
                    {link}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <Link
            className={style.paginateButtons}
            to={`/${String(numberPage)}`}
            onClick={nextPageClick}
          >
            Вперёд
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

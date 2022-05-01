import style from "./Pagination.module.css";
import { Link, NavLink } from "react-router-dom";

const Pagination = ({
  postsPage,
  totalPosts,
  paginate,
  nextPage,
  prevPage,
  currentPage,
}) => {
  const firstNum = 1;
  const lastNum = 10;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.paginateBlock}>
      <Link
        className={style.paginateButtons}
        to={currentPage === firstNum ? `page${1}` : `page${currentPage - 1}`}
        onClick={prevPage}
      >
        Назад
      </Link>
      <ul className={style.paginateList}>
        {pageNumbers.map((numberPage) => (
          <li
            key={numberPage}
            onClick={() => {
              paginate(numberPage);
            }}
          >
            <NavLink
              to={`page${numberPage}`}
              className={({ isActive }) =>
                isActive ? style.activeLink : style.paginateBtn
              }
            >
              {numberPage}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link
        className={style.paginateButtons}
        to={currentPage === lastNum ? `page${10}` : `page${currentPage + 1}`}
        onClick={nextPage}
      >
        Далее
      </Link>
    </div>




  );
};

export default Pagination;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/slices/postSlice";
import { Link } from "react-router-dom";
import Table from "./Components/Table/Table";
import "./App.css";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="wrapper">
      <div className="container">
        <Link className="firs-page" to="/">
          Первая страница
        </Link>
        <Table />
      </div>
    </div>
  );
}

export default App;

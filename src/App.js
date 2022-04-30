import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/slices/postSlice";
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
        <Table />
      </div>
    </div>
  );
}

export default App;

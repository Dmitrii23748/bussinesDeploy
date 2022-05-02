import NewTableBody from "../NewComponents/NewTableBody/NewTableBody";
import NewTableHeader from "../NewComponents/NewTableHeader/NewTableHeader";

const MainPages = ({ filtersArrayData }) => {
  return (
    <>
      <NewTableHeader />
      {filtersArrayData.slice(0, 10).map((post, index) => {
        return <NewTableBody key={index} post={post} />;
      })}
    </>
  );
};

export default MainPages;

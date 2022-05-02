import NewTableHeader from "../NewComponents/NewTableHeader/NewTableHeader";
import NewTableBody from "../NewComponents/NewTableBody/NewTableBody";

const PageSearch = ({ filtersArrayData }) => {
  return (
     <table className="table">
      <NewTableHeader />
      {filtersArrayData.slice(0, 10).map((post, index) => {
        return <NewTableBody key={index} post={post} />;
      })}
    </table>
  );
};

export default PageSearch;

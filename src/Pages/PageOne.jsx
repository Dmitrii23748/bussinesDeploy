import NewTableBody from "../NewComponents/NewTableBody/NewTableBody";
import NewTableHeader from "../NewComponents/NewTableHeader/NewTableHeader";

const PageOne = ({ filtersArrayData, firstNum, secondNum }) => {
  return (
    <>
      <NewTableHeader />
      {filtersArrayData.slice(firstNum, secondNum).map((post, index) => {
        return <NewTableBody key={index} post={post} />;
      })}
    </>
  );
};

export default PageOne;

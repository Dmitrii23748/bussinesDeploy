import style from "./TablePosts.module.css";

const TablePosts = ({ post }) => {
  return (
    <tr key={post.id}>
      <td className={style.tableId}>{post.id}</td>
      <td className={style.tableTitle}>{post.title}</td>
      <td className={style.tableBody}>{post.body}</td>
    </tr>
  );
};

export default TablePosts;

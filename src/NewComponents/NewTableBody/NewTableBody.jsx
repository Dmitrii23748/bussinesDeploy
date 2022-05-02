import style from './NewTableBody.module.css';


const NewTableBody = ({ post }) => {
  return (
    <tbody>
      <tr key={post.id}>
        <td className={style.tableId}>{post.id}</td>
        <td className={style.tableTitle}>{post.title}</td>
        <td className={style.tableBody}>{post.body}</td>
      </tr>
    </tbody>
  );
};

export default NewTableBody;

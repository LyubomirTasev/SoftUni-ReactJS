export default function ToDoItem(
    text,
    isCompleted // separated props
) 
{
  return (
    <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
      <td>{text}</td>
      <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
      <td className="todo-action">
        <button className="btn todo-btn">Change status</button>
      </td>
    </tr>
  );
}

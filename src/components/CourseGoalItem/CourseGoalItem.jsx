export default function CourseGoalItem(props) {
  const deleteHandler = () => {
    return props.onDelete(props.id);
  };

  return (
    <li
      className="m-6 rounded-lg bg-orange-700 px-4 py-2 duration-300 hover:bg-orange-900"
      onClick={deleteHandler}
    >
      {props.children}
    </li>
  );
}

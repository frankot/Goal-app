export default function CourseGoalItem(props) {
  const deleteHandler = () => {
    return props.onDelete(props.id);
  };

  return (
    <li className="bg-orange-700 px-4 py-2 m-6" onClick={deleteHandler}>
      {props.children}
    </li>
  );
}

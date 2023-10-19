import { useState } from "react";
import Button from "../UI/Button/Button";

export default function CourseInput(props) {
  const [enteredVal, setEnteredVal] = useState("");
  const inputChangeHandler = (e) => {
    setEnteredVal(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddGoal(enteredVal);
  };

  return (
    <form
      action="submit"
      onSubmit={formSubmitHandler}
      className="flex flex-col p-8 m-6 gap-y-4 shadow-2xl"
    >
      <label className="font-bold">Course Goal</label>
      <input type="text" onChange={inputChangeHandler} />
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

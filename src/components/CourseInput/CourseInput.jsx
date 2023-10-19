import { useState } from "react";
import Button from "../UI/Button/Button";

export default function CourseInput(props) {
  const [enteredVal, setEnteredVal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (e) => {
    setEnteredVal(e.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredVal.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredVal);
  };

  return (
    <form
      action="submit"
      onSubmit={formSubmitHandler}
      className="mx-10 my-6 flex flex-col gap-y-4 rounded-md bg-[#242424] p-8 shadow-2xl"
    >
      <label
        className={"font-bold " + (isValid ? "text-green-500" : "text-red-500")}
      >
        Course Goal
      </label>
      <input
        type="text"
        className={
          "bg-white p-1 font-bold text-[#242424] outline-none " +
          (isValid ? "" : "border-2 border-red-500 bg-red-100")
        }
        onChange={inputChangeHandler}
      />
      <Button type="submit" invalid={!isValid} >Add Goal</Button>
    </form>
  );
}

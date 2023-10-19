import CourseGoalList from "./components/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseInput/CourseInput";
import { useState } from "react";
function App() {
  const [goals, setGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (itemId) => {
    setGoals((prevGoals) => prevGoals.filter((item) => item.id !== itemId));
  };

  let content = <p>You haven't set any goals!</p>;
  if (goals.length > 0) {
    content = (
      <CourseGoalList goalsList={goals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div className="mx-auto max-w-2xl p-10">
      <CourseInput onAddGoal={addGoalHandler} />
      <section>{content}</section>
    </div>
  );
}

export default App;

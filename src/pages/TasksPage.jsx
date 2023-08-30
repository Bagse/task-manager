import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return (<h1 className="text-xl my-40 text-center">No tasks papu :(</h1>)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id}/>
      ))}
    </div>
  );
}

export default TasksPage;

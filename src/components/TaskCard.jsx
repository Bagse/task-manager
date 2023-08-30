import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import { MdDelete, MdEdit } from "react-icons/md";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 rounded-md p-7 shadow-md shadow-gray-700 space-y-2 hover:scale-105 transition my-5">
      <header className="flex justify-between gap-3">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-2 items-center">
          <Link
            to={`/tasks/${task._id}`}
            className="hover:text-blue-500 transition"
          >
            <MdEdit />
          </Link>
          <button
            className="hover:text-red-500 transition"
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p className="text-xs">{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
}

export default TaskCard;

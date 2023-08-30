import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskForm() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: date.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
    };
    if (data.date) dataValid.date = dayjs.utc(data.date).format();

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate("/tasks");
  });

  return (
    <div className="px-40 py-5 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 bg-zinc-800 w-[400px] p-10 rounded-md shadow-md shadow-gray-600 my-14"
      >
        <label htmlFor="title" className="-mb-3">
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          {...register("title")}
          autoFocus
          className="bg-zinc-700 text-white px-4 py-2 rounded-md outline-none"
        />

        <label htmlFor="description" className="-mb-3">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md outline-none"
        ></textarea>

        <label htmlFor="date" className="-mb-3">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          {...register("date")}
          className="bg-zinc-700 text-white px-4 py-2 rounded-md outline-none"
        />

        <button className="text-white bg-green-500 py-2 font-bold rounded-md hover:bg-green-600 hover:outline hover:outline-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 bg-zinc-800 w-[400px] p-10 rounded-md shadow-md shadow-gray-600 my-24"
      >
        <h1 className="text-2xl text-center font-bold text-green-500">
          REGISTER
        </h1>
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 px-2 py-1 text-center text-white" key={i}>
            {error}
          </div>
        ))}

        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md outline-none"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500 -mt-4">Username is required</p>
        )}

        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md outline-none"
        />
        {errors.email && (
          <p className="text-red-500 -mt-4">Email is required</p>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md outline-none"
        />
        {errors.password && (
          <p className="text-red-500 -mt-4">Password is required</p>
        )}

        <button
          type="submit"
          className="bg-green-400 text-white rounded-xl font-bold py-2 hover:outline hover:outline-2 hover:bg-green-600 transition"
        >
          Sign up
        </button>

        <p className="text-gray-400 text-sm">Already have an account? <Link to="/login" className="text-white hover:underline pl-2">Sign in</Link></p>
      </form>
    </div>
  );
}

export default RegisterPage;

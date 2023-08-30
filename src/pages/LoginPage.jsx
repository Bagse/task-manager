import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks")
  }, [isAuthenticated])

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 bg-zinc-800 w-[340px] md:w-[400px] p-10 rounded-md shadow-md shadow-gray-600 my-32"
      >
        <h1 className="text-2xl text-center font-bold text-green-500">LOGIN</h1>

        {signinErrors.map((error, i) => (
          <div className="bg-red-500 px-2 py-1 text-center text-white" key={i}>
            {error}
          </div>
        ))}
        
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
          Sign in
        </button>

        <p className="text-gray-400 text-sm">Don't have an account? <Link to="/register" className="text-white hover:underline pl-2">Sign up</Link></p>
      </form>
    </div>
  );
}

export default LoginPage;

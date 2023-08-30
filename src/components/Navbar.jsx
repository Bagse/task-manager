import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 py-5 px-40 flex justify-between items-center">
      <Link to={
        isAuthenticated ? "/tasks" : "/"
      }>
        <h1 className="text-2xl font-bold">Tasks Manager</h1>
      </Link>
      <ul className="flex gap-5 text-lg items-center">
        {isAuthenticated ? (
          <>
            <li className="capitalize">Welcome, {user.username}!</li>
            <li className="bg-sky-700 py-1 px-2 rounded-md hover:bg-sky-500 place-content-center flex w-[100px] transition">
              <Link to="/add-task">Add Task</Link>
            </li>
            <li className="bg-black text-white py-1 px-2 rounded-md place-content-center flex w-[100px] hover:outline hover:outline-2 transition">
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="bg-sky-700 py-1 px-2 rounded-md hover:bg-sky-500 place-content-center flex w-[100px]">
              <Link to="/login">Login</Link>
            </li>
            <li className="bg-sky-700 py-1 px-2 rounded-md hover:bg-sky-500 place-content-center flex w-[100px]">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

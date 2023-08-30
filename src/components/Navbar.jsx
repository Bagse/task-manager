import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-[#1E293B] py-5 px-3 lg:px-40 flex justify-between items-center">
      <Link to={
        isAuthenticated ? "/tasks" : "/"
      }>
        <h1 className="text-xl md:text-3xl font-bold">Tasks Manager</h1>
      </Link>
      <ul className="flex gap-3 md:gap-5 text-lg items-center">
        {isAuthenticated ? (
          <>
            <li className="capitalize">Welcome, {user.username}!</li>
            <li className="bg-sky-700 py-1 px-2 rounded-md hover:bg-sky-500 place-content-center flex w-[78px] lg:w-[100px] text-base lg:text-lg transition">
              <Link to="/add-task">Add Task</Link>
            </li>
            <li className="bg-black text-white py-1 px-2 rounded-md place-content-center flex w-[78px] lg:w-[100px] text-base lg:text-lg hover:outline hover:outline-2 transition">
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
            <li className="bg-gray-500 font-semibold py-1 px-2 rounded-md hover:bg-gray-700 outline place-content-center flex w-[78px] lg:w-[100px] text-base lg:text-lg">
              <Link to="/login">Login</Link>
            </li>
            <li className="bg-gray-500 font-semibold py-1 px-2 rounded-md hover:bg-gray-700 hover:outline place-content-center flex w-[78px] lg:w-[100px] text-base lg:text-lg">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

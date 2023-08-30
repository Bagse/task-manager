import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 items-center py-11">
        <section className="md:w-[700px] flex flex-col gap-5 text-lg">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">
            Welcome to our ultimate{" "}
            <span className="text-green-500">task management</span> platform!
          </h1>
          <p>
            Feeling overwhelmed by daily tasks and pending projects? Look no
            further! Our site is designed to simplify your life and keep you
            organized in a whole new way.
          </p>
          <p>
            Get ready to transform the way you approach your daily tasks! Your
            journey to productivity starts here.
          </p>

          <button className="bg-green-500 font-semibold py-2 px-2 rounded-md hover:bg-green-700 hover:outline place-content-center flex w-[100px] md:w-[140px] text-base md:text-lg">
            <Link to="/register">Register</Link>
          </button>
        </section>

        <section>
          <img
            src="./icon2.webp"
            alt="image of checklist"
            className="rounded-md w-auto h-[350px] lg:h-[500px] lg:w-[700px] object-cover"
          />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

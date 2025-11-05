import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <p className="mt-2">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-white/20 rounded-full hover:bg-white/25 backdrop-blur border border-white/20"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Notfound;

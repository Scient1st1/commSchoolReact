const About = () => {
  return (
    <div className="text-white p-5">
      <h1 className="text-3xl font-bold mb-4">About This Application</h1>
      <p className="mb-4">
        This is a movie discovery application built with React. It allows you to
        browse through a vast collection of movies, view their details, and keep
        track of your favorites.
      </p>
      <p className="mb-4">
        The application uses the The Movie Database (TMDb) API to fetch movie
        data. It's built with modern web technologies to provide a fast and
        responsive user experience.
      </p>
      <h2 className="text-2xl font-bold mb-2">Technologies Used</h2>
      <ul className="list-disc list-inside">
        <li>React</li>
        <li>React Router</li>
        <li>Tailwind CSS</li>
        <li>The Movie Database (TMDb) API</li>
      </ul>
    </div>
  );
};

export default About;

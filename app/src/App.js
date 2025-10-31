import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { tempMovieData } from "./data/tempData";

const App = () => {
  const [movies] = useState(tempMovieData);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} />
    </>
  );
};

export default App;

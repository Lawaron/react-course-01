import Logo from "./Logo";
import FoundResults from "./FoundResults";
import Search from "./Search";

const Navbar = ({ movies }) => (
  <nav className="nav-bar">
    <Logo />
    <Search />
    <FoundResults numResults={movies.length} />
  </nav>
);

export default Navbar;

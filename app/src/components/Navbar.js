import Logo from "./Logo";
import FoundResults from "./FoundResults";
import Search from "./Search";

const Navbar = () => (
  <nav className="nav-bar">
    <Logo />
    <Search />
    <FoundResults />
  </nav>
);

export default Navbar;

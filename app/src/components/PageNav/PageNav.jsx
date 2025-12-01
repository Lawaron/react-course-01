import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../Logo/Logo";

// import { nav } from "./PageNav.module.css";
// const { nav } = styles;

const PageNav = () => (
  <nav className={styles.nav}>
    <Logo />
    <ul>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  </nav>
);

export default PageNav;

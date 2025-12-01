import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

const { container, title, message } = styles;

const PageNotFound = () => (
  <main className={container}>
    <h1 className={title}>404 — Page Not Found</h1>
    <p className={message}>
      The page you are looking for doesn&apos;t exist or has been moved.
    </p>
    <Link to="/" className="cta">
      Home
    </Link>
  </main>
);

export default PageNotFound;

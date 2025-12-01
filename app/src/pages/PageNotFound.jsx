const PageNotFound = () => {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>404 — Page Not Found</h1>
      <p style={styles.message}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <a href="/" style={styles.link}>
        Go back to Home
      </a>
    </main>
  );
};

const styles = {
  container: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    margin: "0 0 0.5rem",
  },
  message: {
    margin: "0 0 1rem",
    color: "#555",
  },
  link: {
    color: "#0366d6",
    textDecoration: "none",
    fontWeight: 600,
  },
};

export default PageNotFound;

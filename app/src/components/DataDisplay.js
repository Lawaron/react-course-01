const Loader = () => <p className="loader">Loading...</p>;

const ErrorMessage = ({ message }) => (
  <p className="error">
    <span>😕</span>
    {message}
  </p>
);

const DataDisplay = ({ isLoading, error, children }) => {
  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return children;
};

export default DataDisplay;

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Homepage from "./pages/Homepage/Homepage";
import PageNotFound from "./pages/Error/PageNotFound";
import Login from "./pages/Login/Login";

const NestedCity = () => {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <>
      <p>
        Selected city is:
        {" " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + " "}
        and QueryParam info is: {searchParams.get("info")}
      </p>
      <button
        onClick={() => {
          setSearchParams({ info: Math.random().toString(36).slice(2) });
        }}
      >
        Refresh info
      </button>
      <button
        onClick={() => {
          navigate("/pricing/countries");
        }}
      >
        To countries
      </button>
    </>
  );
};

const App = () => (
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="pricing" element={<Pricing />}>
        {/* <Route index element={<p>Select an option</p>} /> */}
        <Route index element={<Navigate replace to="cities" />} />
        <Route path="cities" element={<p>City list</p>} />
        <Route path="cities/:name" element={<NestedCity />} />
        <Route path="countries" element={<p>Countries list</p>} />
      </Route>
      <Route path="product" element={<Product />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

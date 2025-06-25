import { useSearchParams } from "react-router";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Home from "../pages/home";

const AuthRoutes = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  if (type === "login") {
    return <Login />;
  } else if (type === "signup") {
    return <Signup />;
  } else {
    return <Home />;
  }
};

export default AuthRoutes;

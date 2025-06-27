import { RouterProvider } from "react-router";
import routes from "./routes/route";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>{" "}
    </AuthProvider>
  );
}

export default App;

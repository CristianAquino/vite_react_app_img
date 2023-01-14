import { Navigate, Route, Routes } from "react-router-dom";

// rutas
import routes from "./base/settings/routes";
import { ProtectedRoute } from "./Routes/ProtectedRoute";

// pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Principal from "./Pages/Principal";

function App() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Principal />}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute isLogged={true} />}>
          <Route path={routes.LOGIN} element={<Login />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate replace to={routes.HOME} />} />
    </Routes>
  );
}

export default App;

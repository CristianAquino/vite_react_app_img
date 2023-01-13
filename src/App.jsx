import { Navigate, Route, Routes } from "react-router-dom";

// rutas
import routes from "./base/settings/routes";

// pages
import Home from "./Pages/Home";
import Principal from "./Pages/Principal";

function App() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Principal />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate replace to={routes.HOME} />} />
    </Routes>
  );
}

export default App;

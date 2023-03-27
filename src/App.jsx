// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
// rutas
import routes from "./base/settings/routes";
import { ProtectedRoute } from "./Routes/ProtectedRoute";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import ProfileUser from "./pages/ProfileUser";
import View from "./pages/View";
import FolderImage from "./pages/FolderImage";
import RegisterUser from "./pages/RegisterUser";
import CreateFolderAdd from "./pages/CreateFolderAdd";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import { ViewImage } from "./components/ViewImage/ViewImage";

function App() {
  const { isLogged } = useSelector((state) => state.authSlice);
  return (
    <Routes>
      <Route path={routes.HOME} element={<Principal />}>
        <Route index element={<Home />} />
        <Route element={<ProtectedRoute isLogged={!isLogged} />}>
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.REGISTER} element={<RegisterUser />} />
        </Route>
        <Route
          path={routes.PROFILE}
          element={
            <ProtectedRoute isLogged={isLogged}>
              <ProfileUser />
            </ProtectedRoute>
          }
        />
        <Route
          path={`${routes.FOLDER}/:folderName`}
          element={<FolderImage />}
        />
        <Route path={`${routes.VIEW}/:folderName`} element={<View />}>
          <Route path={":chapterName"} element={<ViewImage />} />
        </Route>

        <Route path={routes.DASHBOARD} element={<Dashboard />} />
        <Route path={routes.CREATEFOLDER} element={<CreateFolderAdd />} />
      </Route>
      <Route path="*" element={<Navigate replace to={routes.HOME} />} />
    </Routes>
  );
}

export default App;

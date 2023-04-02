import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Register } from "../pages/register/Register";
import { NotFound } from "../pages/notFound/NotFound";
import { PasswordReset } from "../pages/passwordReset/PasswordReset";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

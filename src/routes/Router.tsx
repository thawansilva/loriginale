import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { useEffect, useState } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { Register } from "../pages/register/Register";
import { NotFound } from "../pages/notFound/NotFound";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { PasswordReset } from "../pages/passwordReset/PasswordReset";

export const Router = () => {
  const [user, setUser] = useState<Object | null>();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return listen();
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute user={user}>
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

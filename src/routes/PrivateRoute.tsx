import { Navigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

interface RoutesProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: RoutesProps) => {
  const [user, loading, error] = useAuthState(auth);

  return user ? <Navigate to={"/home"} replace /> : children;
};

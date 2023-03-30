import { Navigate } from "react-router-dom";

interface RoutesProps {
  user?: Object | null;
  children: JSX.Element;
}

export const PrivateRoute = ({ user, children }: RoutesProps) => {
  return user ? <Navigate to={"/home"} replace /> : children;
};

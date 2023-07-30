import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks/hooks";

export const RestrictedRoute: React.FC<{
  component: React.ComponentType;
  redirectTo: string;
}> = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

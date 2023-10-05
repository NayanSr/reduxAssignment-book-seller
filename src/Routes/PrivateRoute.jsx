import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.user);
  const location = useLocation();

  if (isLoading) {
    return <p>oooooo</p>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

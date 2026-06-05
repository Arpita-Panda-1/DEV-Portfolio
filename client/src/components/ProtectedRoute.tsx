import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const token = localStorage.getItem(
    "portfolioToken"
  );

  return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/firebase/authContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/Upload" />;
  }

  return children;
};

export default PrivateRoute;

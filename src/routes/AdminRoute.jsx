import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔐 Not logged in
  if (!token || !user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminRoute;

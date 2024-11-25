import { useAuthContext } from "@/context/hooks/use-auth-context";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProfileGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/home" />;
  }

  return children || <Outlet />;
};

export default ProfileGuard;

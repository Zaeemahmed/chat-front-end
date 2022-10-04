import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getAuthUser } from "../utils/api";
import { User } from "../utils/types";
import { AuthContext } from "../utils/context/authContext";

export const AuthenticatedRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const { updateAuthUser, user } = useContext(AuthContext);
  const controller = new AbortController();
  const location = useLocation();

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        updateAuthUser(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(({ err }) => {
        setLoading(false);
        console.log(err);
      });
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <>Loading</>;

  if (user) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

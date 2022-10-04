import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuthUser } from "../utils/api";
import { User } from "../utils/types";

export const AuthenticatedRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  const location = useLocation();

  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        setUser(data);
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

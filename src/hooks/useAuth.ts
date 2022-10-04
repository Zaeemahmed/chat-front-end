import React, { useState, useEffect } from "react";
import { getAuthUser } from "../utils/api";
import { User } from "../utils/types";

export const useAuth = () => {
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();
  console.log(user);
  useEffect(() => {
    setLoading(true);
    getAuthUser()
      .then(({ data }) => {
        console.log(data);
        setUser(data);
        setLoading(false);
      })
      .catch(({ err }) => {
        setLoading(false);
        console.log(err);
      });
    return () => {
      controller.abort();
    };
  }, [user, loading]);

  return { user, loading };
};

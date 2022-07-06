/* eslint-disable react-hooks/exhaustive-deps */
import Router from "next/router";
import { useEffect } from "react";
import { GetToken, GetUser } from "../utility";

export const ProtectedRoute = () => {
  const user = GetUser();
  const token = GetToken();
  useEffect(() => {
    if (token) {
      if (user.role === "user") {
        Router.push("/login");
      } else {
        Router.push("#");
      }
    } else {
      Router.push("#");
    }
  }, []);
};

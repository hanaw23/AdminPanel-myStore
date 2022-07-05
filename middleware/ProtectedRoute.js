import Router from "next/router";
import { useEffect } from "react";
import { GetToken, GetUser, HasToken } from "../utility";

export const ProtectedRoute = () => {
  useEffect(() => {
    const user = GetUser();
    if (GetToken() && GetUser() && HasToken() && user.role === "admin") {
      HasToken();
      Router.push("#");
    } else {
      Router.push("/login");
    }
  }, []);
};

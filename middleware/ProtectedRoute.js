import Router from "next/router";
import { useEffect } from "react";
import { GetToken, GetUser, HasToken } from "../utility";

export const ProtectedRoute = () => {
  useEffect(() => {
    if (!GetToken() && !GetUser() && !HasToken()) {
      Router.push("/login");
    } else {
      HasToken();
      Router.push("#");
    }
  }, []);
};

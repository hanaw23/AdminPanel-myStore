import Router from "next/router";
import { useEffect } from "react";
import { GetUser, HasToken } from "../utility";

export const ProtectedRoute = () => {
  useEffect(() => {
    if (GetUser().role === "user") {
      Router.push("/login");
    } else {
      HasToken();
      Router.push("#");
    }
  }, []);
};

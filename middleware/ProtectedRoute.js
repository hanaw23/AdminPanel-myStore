import Router from "next/router";
// import { useEffect } from "react";
import { GetToken, GetUser, HasToken } from "../utility";

export const ProtectedRoute = () => {
  const token = GetToken();
  const user = GetUser();
  const hasToken = HasToken();
  if (!token && !user && !hasToken) {
    return Router.replace("/login");
  } else if (token && user && hasToken) {
    return Router.push("#");
  }
};

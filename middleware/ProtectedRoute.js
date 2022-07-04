import Router from "next/router";
// import { useEffect } from "react";
import { GetToken, GetUser, HasToken } from "../utility";

export const ProtectedRoute = () => {
  // const token = GetToken();
  const user = GetUser();
  const hasToken = HasToken();
  if (!user && !hasToken) {
    return Router.replace("/login");
  } else if (user && hasToken) {
    return Router.push("#");
  }
};

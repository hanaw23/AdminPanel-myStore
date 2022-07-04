import Router from "next/router";
import { useEffect } from "react";
import { GetToken, GetUser, HasToken } from "../utility";

export const ProtectedRoute = () => {
  const user = GetUser();
  const token = GetToken();
  if (!token && !user) {
    return Router.replace("/login");
  } else if (token && user) {
    return Router.push("#");
  }
};

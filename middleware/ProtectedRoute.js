import Router from "next/router";
import { GetToken, GetUser } from "../utility";

export const ProtectedRoute = () => {
  const user = GetUser();
  const token = GetToken();
  if (!token && !user) {
    return Router.push("/login");
  } else if (token && user) {
    return Router.push("#");
  }
};

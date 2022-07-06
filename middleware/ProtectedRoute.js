import Router from "next/router";
import { GetToken, GetUser } from "../utility";

export const ProtectedRoute = () => {
  const user = GetUser();
  const token = GetToken();
  if (token && user) {
    if (user.role === "user") {
      Router.push("/login");
    } else {
      if (user.role === "admin") {
        Router.push("#");
      } else {
        Router.push("/login");
      }
    }
  } else {
    Router.push("/login");
  }
};

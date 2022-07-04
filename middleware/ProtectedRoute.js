import Router from "next/router";
// import { useEffect } from "react";
import { GetToken, GetUser, HasToken } from "../utility";

export const ProtectedRoute = () => {
  if (!GetToken() && !GetUser() && !HasToken()) {
    return Router.push("/login");
  } else if (GetToken() && GetUser() && HasToken()) {
    return HasToken();
  }
};

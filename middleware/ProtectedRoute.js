import { useRouter } from "next/router";
import { GetToken, GetUser } from "../utility";

export const ProtectedRoute = () => {
  const user = GetUser();
  const token = GetToken();
  const router = useRouter();
  if (!token && !user) {
    return router.push("/login");
  } else if (token && user) {
    return router.push("/contentManagement");
  }
};

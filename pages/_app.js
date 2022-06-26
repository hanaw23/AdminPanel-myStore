import "../styles/globals.css";
import { wrapper } from "../store";
import { useEffect } from "react";
import { ProtectedRoute } from "../middleware/ProtectedRoute";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    return () => {
      ProtectedRoute();
    };
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);

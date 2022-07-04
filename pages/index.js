/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    return () => {
      router.push("/contentManagement");
    };
  }, []);
};

export default Home;

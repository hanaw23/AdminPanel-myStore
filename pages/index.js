/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/login');
  }, []);
}

export default Home;

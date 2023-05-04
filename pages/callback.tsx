import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Callback: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query?.code);
  }, [router]);
  return (
    <div>
      <p className={`text-white`}>Loading...</p>
    </div>
  );
};

export default Callback;

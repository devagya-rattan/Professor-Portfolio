import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className=" flex flex-col justify-center items-center h-screen w-full">
        <PuffLoader color="#000000" size={100} />
      </div>
    );

  return (
    <div className="h-screen w-full pl-40 pr-40">
      <br />
      hieeeee
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

function Blog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className=" flex flex-col justify-center items-center h-screen w-full">
        <BeatLoader />
      </div>
    );

  return (
    <>
      <div className='h-screen w-full pl-40 pr-40'>
        <br/>
        Blogs
      </div>
    </>
  );
}

export default Blog;

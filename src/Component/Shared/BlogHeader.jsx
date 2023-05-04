import React from "react";
import Lottie from "react-lottie";
import BlogAnimation from "../../../public/blogPost.json";

const BlogHeader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BlogAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="md:px-4">
      <div className="hero   md:min-h-screen hero-overlay bg-opacity-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie options={defaultOptions} height={400} width={400} />
          <div>
            <h1 className=" mb-5 text-5xl text-warning font-bold">Blog Post</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;

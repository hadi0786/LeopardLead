import React from "react";
import BlogCard from "./BlogComponents/BlogCards";
const Blog = () => {
  const blogs = [{}, {}, {}, {}, {}];
  return (
    <div className="px-10 mx-auto min-h-screen mt-32">
      <div>
        <section className="flex items-center py-10  rounded-[12px] my-10 p-5 gap-3 bg-[#f1c40f]">
          <section className="flex-1 flex flex-col gap-5 py-5">
            <h6 className="text-2xl">OUR BLOGS</h6>
            <h4 className="text-5xl font-semibold leading-snug">
              Learn from Experts. Share, Inspire & Engage
            </h4>
          </section>

          <section className="flex-1">
            <p className="text-lg">
              We have our eyes, ears and heart into everything inspirational,
              innovative, creative and groundbreaking. Be the first to get
              industry insights and thought-provoking ideas from our experts as
              we share our knowledge and experience. We share the things you
              love to read and learn about and all the exciting stuff that we're
              working on.
            </p>
          </section>
        </section>

        <div className="py-5 my-20 text-6xl font-semibold text-center qlinks-menu__item mx-auto">
          <h2 className="tracking-widest w-uline cursor-pointer inline-block hover:text-gray-500">
            LATEST BLOGS
          </h2>
        </div>
        <BlogCard data={blogs} />
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import PostDetails from "../components/PostDetails";
import Link from "next/link";
import Featuredpost from "../components/Featuredpost";
export default function Posts() {
  return (
    <>
      <div className="w-full h-fit  pl-10 pr-10 lg:pl-20 lg:pr-20 flex flex-col space-y-8 justify-center">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-gray-700 text-xl">
              Recent Articles
            </p>
            <h1 className="text-4xl font-semibold mb-5">
              Latest from the Blog
            </h1>
            <h2 className="text-xl font-semibold">Featured Post</h2>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 text-xl hover:text-red-500 active:text-orange-400">
              <u>View All</u>
            </span>
            <div className="w-10">
              <img src="/img/arrows.png" alt="" />
            </div>
          </div>
        </div>

        {/*featured post*/}
        <div className=" flex flex-col space-y-5 md:flex-row md:space-x-8  md:space-y-0">
          <Featuredpost />

          <div className=" flex flex-col space-y-5 p-3 border-2 border-orange-50">
            <h1 className = "text-xl font-semibold">All Posts</h1>
         

            <PostDetails
              title="Designers are meant to be loved and not to be understood"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident"
            ></PostDetails>

            <PostDetails
              title="Designers are meant to be loved and not to be understood"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident"
            ></PostDetails>

            <PostDetails
              title="Designers are meant to be loved and not to be understood"
              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident"
            ></PostDetails>
          </div>
        </div>
      </div>
    </>
  );
}

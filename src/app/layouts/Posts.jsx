'use client'
import React, { useEffect, useState } from "react";
import PostDetails from "../pages/components/PostDetails";
import Link from "next/link";
import Featuredpost from "../pages/components/Featuredpost";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const featuredPost = posts[0]; // Assume the first post is the featured one
  const recentPosts = posts.slice(1, 4); // Get the next three posts for recent posts

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
              <Link href="/allblogs">
                <u>View All</u>
              </Link>
            </span>
            <div className="w-10">
              <img src="/img/arrows.png" alt="" />
            </div>
          </div>
        </div>

        {/*featured post*/}
        <div className=" flex flex-col space-y-5 lg:flex-row lg:space-x-8  lg:space-y-0">
          <Featuredpost />

          <div className=" flex flex-col space-y-5 p-3 border-2 border-orange-50">
            <h1 className="text-xl font-semibold">All Posts</h1>

            {recentPosts.map((post) => (
              <PostDetails key={post.id} title={post.title} body={post.body} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

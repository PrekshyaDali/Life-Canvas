"use client";

import React, { useEffect, useState } from "react";
import PostDetails from "../pages/components/PostDetails";
import Layout from "../layouts/Layout";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setBlogs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="pl-10 pr-10 md:pl-20 md:pr-20 pt-10">
        <div className="mb-5">
          <h1 className="text-4xl font-semibold">All Blogs</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {blogs.map((blog) => (
            <PostDetails
              key={blog.id}
              title={blog.title}
              body={blog.body}
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

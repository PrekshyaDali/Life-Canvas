"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PostDetails({ post }) {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/allblogs/${post?.id}`);
  };

  return (
    <>
      <div className="border-2 border-orange-50 md:border-none h-fit md:h-52 p-3 flex-col space-y-3 sm:flex sm:flex-row sm:space-x-8 sm:space-y-0 hover:bg-gray-100 rounded-md">
        <div className="flex-1 flex-col space-y-3">
          <div>
            <span className="text-sm text-gray-500">
              By <span className="text-orange-500">John Deo</span> March 21,
              2024
            </span>
            <h1 className="text-xl font-bold mb-3">{post?.title}</h1>
            <p className="line-clamp-2">{post?.body}</p>
          </div>
          <div className="flex justify-end relative">
            <div>
              <button
                onClick={handleReadMore}
                className="pl-6 pr-12 py-2 hover:bg-orange-400 active:bg-orange-500 bg-orange-500 rounded-full text-sm text-white"
              >
                Read more
              </button>
            </div>
            <Link href={`/allblogs/${post?.id}`}>
              <img
                className="absolute right-2 w-8 top-1 cursor-pointer"
                src="/img/rightarrow.png"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="h-full w-56">
            <img
              className="object-cover rounded-md w-full h-full"
              src="/img/Heroimg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

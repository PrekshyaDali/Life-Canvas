import React from "react";
import PostDetails from "../components/PostDetails";
export default function Posts() {
  return (
    <>
      <div className="w-full h-fit pt-10 pl-10 pr-10 lg:pl-20 lg:pr-20 flex flex-col space-y-8 justify-center">
        <div className="">
          <p className = "font-semibold text-gray-700 text-xl">Recent Articles</p>
          <h1 className = "text-4xl font-semibold">Latest from the Blog</h1>
        </div>
        <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
          <div>
            <PostDetails
              title="Designers are meant to be loved"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          impedit odit eaque reiciendis delectus harum praesentium veniam quo
          libero voluptate corporis ratione, debitis architecto consectetur
          accusamus possimus cumque. Deserunt, nihil."
            ></PostDetails>
          </div>
          <div>
            <PostDetails
              title="Designers are meant to be loved"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          impedit odit eaque reiciendis delectus harum praesentium veniam quo
          libero voluptate corporis ratione, debitis architecto consectetur
          accusamus possimus cumque. Deserunt, nihil."
            ></PostDetails>
          </div>
          <div>
            <PostDetails
              title="Designers are meant to be loved"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          impedit odit eaque reiciendis delectus harum praesentium veniam quo
          libero voluptate corporis ratione, debitis architecto consectetur
          accusamus possimus cumque. Deserunt, nihil."
            ></PostDetails>
          </div>
          <div>
        <PostDetails
          title="Designers are meant to be loved"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          impedit odit eaque reiciendis delectus harum praesentium veniam quo
          libero voluptate corporis ratione, debitis architecto consectetur
          accusamus possimus cumque. Deserunt, nihil."
        ></PostDetails>
      </div>
        </div>
      </div>
    </>
  );
}

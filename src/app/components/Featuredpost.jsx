import Link from "next/link";
export default function Featuredpost({ post }) {
  console.log({ post });
  
  return (
    <div className="w-full lg:w-3/5 h-fit border-2 border-orange-50 p-3 flex flex-col space-y-5">
      <div className="h-60 lg:h-96 border-2">
        <img
          className="object-cover w-full h-full"
          src="/img/Heroimg.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-5">
        <h1 className="text-2xl font-semibold">{post?.title}</h1>
        <p className="text-gray-500 text-sm line-clamp-3">{post?.body}</p>
        <div className="flex justify-start relative">
          <div className="">
            <Link href={`/allblogs/${post?.id}`}>
              <button className="pl-6 pr-12 py-2 hover:bg-orange-400 active:bg-orange-500 bg-orange-500 rounded-full text-sm text-white">
                Read more
              </button>
            </Link>
          </div>
          <img
            className="absolute right-2 w-8 top-1"
            src="/img/rightarrow.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

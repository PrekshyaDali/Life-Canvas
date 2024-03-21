export default function Footer() {
  return (
    <div className="bg-[#232536] w-full h-fit pt-5 pb-5 text-white pl-10 pr-10 md:pl-20 md:pr-20 flex justify-between space-x-10 ">
      <div classname="">
        <h1 className="font-semibold text-xl ">Life Canvas</h1>
        <div className="w-20 mb-5 ">
          <img className="object-cover" src="/img/logo.png" alt="" />
        </div>
        <p className="text-gray-400 text-sm">
          Copyright @2024 LifeCanvas.{" "}
          <span className="text-red-500">All Rights Reserved</span>
        </p>
      </div>

      <div className="flex space-x-3">
        <div className="h-10 w-10 hover:bg-gray-700 active:bg-[#4C4C4C] flex justify-center items-center rounded-md">
          <img className="h-8" src="/img/instagram.png" alt="" />
        </div>
        <div className="h-10 w-10 hover:bg-gray-700 active:bg-[#4C4C4C] flex justify-center items-center rounded-md">
          <img className="h-8" src="/img/linkedin.png" alt="" />
        </div>
        <div className="h-10 w-10 hover:bg-gray-700 active:bg-[#4C4C4C] flex justify-center items-center rounded-md">
          <img className="h-8" src="/img/github.png" alt="" />
        </div>
        <div className="h-10 w-10 hover:bg-gray-700 active:bg-[#4C4C4C] flex justify-center items-center rounded-md">
          <img className="h-8" src="/img/instagram.png" alt="" />
        </div>
      </div>
    </div>
  );
}

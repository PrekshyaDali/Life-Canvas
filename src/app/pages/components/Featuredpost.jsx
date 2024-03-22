export default function Featuredpost() {
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
        <h1 className="text-2xl font-semibold">
          Designers are meant to be loved and not to be understood
        </h1>
        <p className="text-gray-500 text-sm line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          omnis iusto eius enim mollitia vel placeat adipisci deserunt! Veniam
          atque possimus ex maxime corporis soluta quas, deleniti omnis tempore
          laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempore voluptatum tenetur eligendi odit temporibus soluta praesentium
          consequuntur debitis quia provident quaerat asperiores dolor sunt
          totam possimus, illo, cupiditate cum eveniet.
        </p>
        <div className="flex justify-start relative">
          <div className="">
            <button className="pl-6 pr-12 py-2 hover:bg-orange-400 active:bg-orange-500 bg-orange-500 rounded-full text-sm text-white">
              Read more
            </button>
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

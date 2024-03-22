import Button from "../../components/Button";
export default function Hero() {
  return (
    <div className="bg-[#E5E5E5] p-20">
      <div className=" w-full h-fit flex">
        <div className="flex flex-col space-y-5 pr-20 ">
          <h2 className="text-2xl font-semibold text-gray-700">Life Canvas</h2>
          <h1 className="text-5xl font-semibold">
            "Embrace Your Journey: Exploring the Canvas of Life"
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus quo unde praesentium facilis porro harum quos atque
            repellat ducimus eligendi minima, repudiandae consectetur,
            cupiditate perferendis aliquid, consequuntur impedit fuga vero.
          </p>
          <div>
            <Button name="Subscribe"></Button>
          </div>
        </div>

        <div className="max-w-2xl">
          <img src="/img/Heroimg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}


export default function NavBar() {
  return (
    <div className="flex w-full fixed top-0 left-0 right-0  h-16  items-center justify-between bg-orange-500 pr-10 pl-10">
      <div className="bg-white h-16 w-16 rounded-full justify-center flex items-center">
        <img className="object-cover" src="/img/logo.png" alt="" />
      </div>

      <div className = "flex space-x-5">
        <div className = "flex justify-center ">
          <ul className="flex space-x-8 text-white text-md items-center justify-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <button className="bg-white px-4 rounded-md py-2  text-black font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

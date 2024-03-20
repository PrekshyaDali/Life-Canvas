import NavBar from "./components/NavBar";
import Hero from "./layouts/Hero";
import Posts from "./layouts/Posts";

export default function page() {
  return (
    <div className="w-full h-full pt-16 ">
      <NavBar />
      <Hero />
      <Posts />
    </div>
  );
}

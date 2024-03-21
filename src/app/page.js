import NavBar from "./components/NavBar";
import AllBlogs from "./layouts/AllBlogs";
import ContactUs from "./layouts/ContactUs";
import Footer from "./layouts/Footer";
import Hero from "./layouts/Hero";
import Posts from "./layouts/Posts";

export default function page() {
  return (
    <div className="w-full h-full pt-16  ">
      <NavBar />

      <div className="flex flex-col space-y-20">
        <Hero />
        <Posts />
        <Footer />
      </div>
    </div>
  );
}

import NavBar from "./components/NavBar";
import AllBlogs from "./allblogs/page";

import ContactUs from "./ContactUs/page";
import Footer from "./layouts/Footer";
import Hero from "./pages/Home/Hero";
import Posts from "./layouts/Posts";
import Layout from "./layouts/Layout";

export default function page() {
  return (
    <Layout>
      <div className="w-full h-full   ">
        <div className="flex flex-col space-y-20">
          <Hero />
          <Posts />
          <Footer />
          {/* <AllBlogs/> */}
        </div>
      </div>
    </Layout>
  );
}

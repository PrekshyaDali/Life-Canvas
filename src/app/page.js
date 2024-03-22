import NavBar from "./pages/components/NavBar";
import AllBlogs from "./allblogs/page";

import ContactUs from "./ContactUs/page";
import Footer from "./layouts/Footer";
import Hero from "./pages/Home/Hero";
import Posts from "./layouts/Posts";
import Layout from "./layouts/Layout";
import BlogRead from "./pages/blog/[id]";

export default function page() {
  return (
    <Layout>
      <div className="w-full h-full space-y-8">
        <Hero />
        <Posts />
        <Footer />
      </div>
    </Layout>
  );
}

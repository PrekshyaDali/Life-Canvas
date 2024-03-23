
import Layout from "./layouts/Layout"
import Hero from "./Home/Hero";
import Posts from "./layouts/Posts"
import Footer from "./layouts/Footer"


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

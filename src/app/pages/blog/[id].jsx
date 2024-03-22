import BackButton from "@/app/pages/components/BackButton";
import Layout from "@/app/layouts/Layout";
import { useRouter } from "next/navigation";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}}`);
  const data = await res.json();

  return {
    props: { blog: data },
  };
}

export default function BlogRead({ blog }) {
  // const router = useRouter();

  return (
    <Layout>
      <div className="w-full h-full pt-10 md:pl-20 md:pr-20 pl-10 pr-10">
        <BackButton />
        <div className="flex flex-col space-y-10 justify-center items-center">
          <div className="space-y-8 p-8">
            <h1 className="text-5xl font-semibold text-center">{blog.title}</h1>
            <p className="text-lg">{blog.body}</p>
          </div>
          {/* Image */}
          <div className="max-w-5xl h-auto">
            <img
              className="object-cover w-full h-full"
              src="/img/Heroimg.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <p className="text-gray-500">This is a photo caption</p>
          </div>
          {/* Details of the blog */}
          <div>
            <p className="text-lg">{blog.body}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

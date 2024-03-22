import PostDetails from "../components/PostDetails";
import Layout from "../layouts/Layout";

export default function AllBlogs() {
  return (
    <Layout>
      <div className=" pl-10 pr-10 md:pl-20 md:pr-20 pt-10">
        <div className="mb-5">
          <h1 className="text-4xl font-semibold ">All Blogs</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
          <PostDetails
            title="Designers are meant to be loved and not to be understood"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut posuere leo. Sed tristique nisl ac justo aliquet, sit amet posuere urna bibendum. Vivamus ultrices justo vel risus tincidunt, nec accumsan orci fermentum. Quisque tincidunt nisl sed tortor consequat, sit amet mattis nulla pulvinar. Integer at elit semper, blandit elit non, fermentum ligula. Donec lobortis felis nec lorem interdum, nec faucibus justo dapibus. Vivamus lacinia nisi eu justo congue, in finibus eros luctus. Aliquam erat volutpat. Vivamus sed quam vel orci faucibus lacinia. Integer in luctus elit. In hac habitasse platea dictumst. Suspendisse nec velit in velit gravida eleifend. Fusce tincidunt ex et enim pharetra, sit amet vehicula nulla suscipit"
          ></PostDetails>
          <PostDetails
            title="Designers are meant to be loved and not to be understood"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut posuere leo. Sed tristique nisl ac justo aliquet, sit amet posuere urna bibendum. Vivamus ultrices justo vel risus tincidunt, nec accumsan orci fermentum. Quisque tincidunt nisl sed tortor consequat, sit amet mattis nulla pulvinar. Integer at elit semper, blandit elit non, fermentum ligula. Donec lobortis felis nec lorem interdum, nec faucibus justo dapibus. Vivamus lacinia nisi eu justo congue, in finibus eros luctus. Aliquam erat volutpat. Vivamus sed quam vel orci faucibus lacinia. Integer in luctus elit. In hac habitasse platea dictumst. Suspendisse nec velit in velit gravida eleifend. Fusce tincidunt ex et enim pharetra, sit amet vehicula nulla suscipit"
          ></PostDetails>

          <PostDetails
            title="Designers are meant to be loved and not to be understood"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut posuere leo. Sed tristique nisl ac justo aliquet, sit amet posuere urna bibendum. Vivamus ultrices justo vel risus tincidunt, nec accumsan orci fermentum. Quisque tincidunt nisl sed tortor consequat, sit amet mattis nulla pulvinar. Integer at elit semper, blandit elit non, fermentum ligula. Donec lobortis felis nec lorem interdum, nec faucibus justo dapibus. Vivamus lacinia nisi eu justo congue, in finibus eros luctus. Aliquam erat volutpat. Vivamus sed quam vel orci faucibus lacinia. Integer in luctus elit. In hac habitasse platea dictumst. Suspendisse nec velit in velit gravida eleifend. Fusce tincidunt ex et enim pharetra, sit amet vehicula nulla suscipit"
          ></PostDetails>

          <PostDetails
            title="Designers are meant to be loved and not to be understood"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut posuere leo. Sed tristique nisl ac justo aliquet, sit amet posuere urna bibendum. Vivamus ultrices justo vel risus tincidunt, nec accumsan orci fermentum. Quisque tincidunt nisl sed tortor consequat, sit amet mattis nulla pulvinar. Integer at elit semper, blandit elit non, fermentum ligula. Donec lobortis felis nec lorem interdum, nec faucibus justo dapibus. Vivamus lacinia nisi eu justo congue, in finibus eros luctus. Aliquam erat volutpat. Vivamus sed quam vel orci faucibus lacinia. Integer in luctus elit. In hac habitasse platea dictumst. Suspendisse nec velit in velit gravida eleifend. Fusce tincidunt ex et enim pharetra, sit amet vehicula nulla suscipit"
          ></PostDetails>
        </div>
      </div>
    </Layout>
  );
}

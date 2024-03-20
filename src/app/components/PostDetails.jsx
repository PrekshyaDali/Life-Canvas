import Button from "./Button";

export default function PostDetails(props) {
  return (
    <div className="max-w-96 h-fit border-2 border-orange-50 p-3 flex flex-col space-y-5">
      <div className="w-full h-52">
        <img
          className="object-cover w-full h-full"
          src="/img/Heroimg.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-xl font-bold">{props.title}</h1>
        <p className="line-clamp-3">{props.body}</p>
      </div>
      <div className="flex justify-end">
        <Button name="Read more"></Button>
      </div>
    </div>
  );
}

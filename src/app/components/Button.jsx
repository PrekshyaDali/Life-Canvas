

export default function Button(props) {
  return (
    <button className="bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-400 active:bg-orange-500 text-white">
      {props.name}
    </button>
  );
}

"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div>
      <button className="bg-red-700 hover:bg-red-600 active:bg-red-700 text-white px-6 py-2 rounded-full" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
}

"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="font-mulish text-gray-700 h-[80vh] m-auto flex items-center flex-col justify-center gap-4">
      <h2 className="text-3xl text-secondary">Not Found</h2>
      <p>Could not find requested resources</p>
      <button
        onClick={() => router.back()}
        className="bg-secondary rounded text-white py-2 px-4"
      >
        Return Back
      </button>
    </div>
  );
}

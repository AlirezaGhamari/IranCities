import City from "@/components/City/City";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <City />
      <Link
        href={"/functionQuestion"}
        className="text-blue-600 hover:text-blue-800"
      >
        {" "}
        functionQuestion
      </Link>
    </div>
  );
}

export default page;

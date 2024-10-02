"use client";
import { useState } from "react";
import Image from "next/image";

const Person = ({
  firstname,
  lastname,
  primaryFunction,
  secondaryFunctions,
  grade,
  joined,
  imagePath,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-80 w-64 overflow-hidden rounded-md shadow-lg transition-shadow duration-300 hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imagePath}
        alt={`${firstname} ${lastname}`}
        layout="intrinsic" // Use intrinsic layout to maintain original aspect ratio
        width={256} // Provide exact dimensions (w-64 is 256px)
        height={320} // Maintain a fixed height for the image
        className="rounded-md"
      />
      <div
        style={{
          visibility: hovered ? "visible" : "hidden",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
        }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-4 text-white"
      >
        <h2 className="text-2xl font-bold">
          {firstname} {lastname}
        </h2>
        <hr className="my-2 w-full border-gray-400" />
        <p className="text-lg">{primaryFunction}</p>
        <p className="mt-1 text-sm">{grade}</p>
        <p className="mt-2 text-xs">{secondaryFunctions}</p>
        <p className="mt-4 text-xs">{joined}</p>
      </div>
    </div>
  );
};

export default Person;

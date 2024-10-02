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
      className="relative h-80 w-64"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Person's Image */}
      <Image
        src={imagePath}
        alt={`${firstname} ${lastname}`}
        layout="fill" // makes the image fill the container
        objectFit="cover" // ensures the image doesn't get distorted
        className="rounded-md"
      />

      {/* Hover Information */}
      {hovered && (
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-70 p-4 text-white transition-all duration-300 ease-in-out">
          <h2 className="text-2xl font-bold">
            {firstname} {lastname}
          </h2>
          <hr className="my-2 w-full border-gray-400" />
          <p className="text-lg">{primaryFunction}</p>
          <p className="mt-1 text-sm">{grade}</p>
          <p className="mt-2 text-xs">{secondaryFunctions}</p>
          <p className="mt-4 text-xs">Joined: {joined}</p>
        </div>
      )}
    </div>
  );
};

export default Person;

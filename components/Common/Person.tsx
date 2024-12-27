'use client';
import { useState } from 'react';
import Image from 'next/image';

interface PersonProps {
    firstname: string;
    lastname: string;
    primaryFunction: string;
    secondaryFunctions: string;
    functionFFZ: string;
    joined: string;
    imagePath: any;
}

const Person = ({
    firstname,
    lastname,
    primaryFunction,
    secondaryFunctions,
    functionFFZ,
    joined,
    imagePath,
}: PersonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative flex  w-[200px] justify-center rounded-md bg-gray-dark shadow-lg transition-shadow duration-300 hover:shadow-2xl "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={imagePath}
                alt={`${firstname} ${lastname}`}
                width={180}
                height={255}
                style={{ margin: '15px' }}
                className="rounded-md"
            />
            <div
                style={{
                    visibility: hovered ? 'visible' : 'hidden',
                    opacity: hovered ? 1 : 0,
                    transition:
                        'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
                }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-4 text-center text-white"
            >
                <h2 className="text-2xl font-bold">
                    {firstname} {lastname}
                </h2>
                <hr className="my-2 w-full border-gray-400" />
                <p className="text-lg">{primaryFunction}</p>
                <p className="mt-1 text-sm">Funktion FFZ: {functionFFZ}</p>
                <p className="mt-2 text-xs">
                    Zusatzfunktionen: {secondaryFunctions}
                </p>
                <p className="mt-4 text-xs">Im GSK seit {joined}</p>
            </div>
        </div>
    );
};

export default Person;

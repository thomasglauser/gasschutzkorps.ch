'use client';
import { useState } from 'react';
import Image from 'next/image';

interface PersonProps {
    firstname: string;
    lastname: string;
    primaryFunction: string;
    imagePath: any;
}

const Person = ({
    firstname,
    lastname,
    primaryFunction,
    imagePath,
}: PersonProps) => {
    const [hovered, setHovered] = useState(false);

    const toggleHover = () => {
        setHovered((prev) => !prev);
    };

    return (
        <div
            className="relative flex w-[200px] justify-center rounded-md shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={toggleHover}
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
                className="absolute inset-0 flex flex-col items-center justify-center bg-gray-dark bg-opacity-70 p-4 text-center text-white"
            >
                <h2 className="text-2xl font-bold">
                    {firstname} {lastname}
                </h2>
                <hr className="my-2 w-full border-gray-400" />
                <p className="text-lg">{primaryFunction}</p>
            </div>
        </div>
    );
};

export default Person;

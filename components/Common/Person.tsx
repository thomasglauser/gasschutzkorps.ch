'use client';
import { useState, useEffect } from 'react';
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
    const [isMobile, setIsMobile] = useState(false);

    const handleInteraction = () => {
        if (isMobile) {
            setHovered((prev) => !prev); // Toggle on click for mobile
        }
    };

    // Set `isMobile` based on screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Customize breakpoint if needed
        };
        handleResize(); // Check initially
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className="relative flex w-[200px] justify-center rounded-md"
            onMouseEnter={!isMobile ? () => setHovered(true) : undefined}
            onMouseLeave={!isMobile ? () => setHovered(false) : undefined}
            onClick={handleInteraction}
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
                className="absolute inset-0 flex flex-col items-center justify-center bg-black border-white border-2 bg-opacity-70 p-4 text-center text-white"
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

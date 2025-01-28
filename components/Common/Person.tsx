'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PersonProps {
    id: string;
    firstname: string;
    lastname: string;
    primaryFunction: string;
    imagePath: any;
    hoveredPerson: string | null;
    setHoveredPerson: (id: string | null) => void;
}

const Person = ({
    id,
    firstname,
    lastname,
    primaryFunction,
    imagePath,
    hoveredPerson,
    setHoveredPerson,
}: PersonProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isHovered = hoveredPerson === id;

    const handleInteraction = () => {
        if (isMobile) {
            setHoveredPerson(isHovered ? null : id);
        }
    };

    return (
        <div
            data-testid={id}
            className="relative flex w-[200px] justify-center rounded-md"
            onMouseEnter={!isMobile ? () => setHoveredPerson(id) : undefined}
            onMouseLeave={!isMobile ? () => setHoveredPerson(null) : undefined}
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
                    visibility: isHovered ? 'visible' : 'hidden',
                    opacity: isHovered ? 1 : 0,
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

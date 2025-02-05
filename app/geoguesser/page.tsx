'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useMapEvents } from 'react-leaflet'; // ✅ Import hook normally

const MapContainer = dynamic(
    () =>
        import('react-leaflet').then((mod) => ({ default: mod.MapContainer })),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => ({ default: mod.TileLayer })),
    { ssr: false }
);
const Marker = dynamic(
    () => import('react-leaflet').then((mod) => ({ default: mod.Marker })),
    { ssr: false }
);
const Polyline = dynamic(
    () => import('react-leaflet').then((mod) => ({ default: mod.Polyline })),
    { ssr: false }
);

import 'leaflet/dist/leaflet.css';

const ZugCoordinates: [number, number] = [47.1662, 8.5155];

import addresses from './addresses';

interface Address {
    name: string;
    coords: [number, number];
}

function getDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
): number {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

const LocationGuessingGame: React.FC = () => {
    const [currentAddress, setCurrentAddress] = useState<Address>(addresses[0]);
    const [guess, setGuess] = useState<[number, number] | null>(null);
    const [distance, setDistance] = useState<number | null>(null);
    const [scoreboard, setScoreboard] = useState<number[]>([]);
    const [customIcon, setCustomIcon] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('leaflet').then((L) => {
                const icon = new L.Icon({
                    iconUrl:
                        'https://cdn-icons-png.flaticon.com/128/684/684908.png',
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                });
                setCustomIcon(icon);
            });
        }
    }, []);

    const handleMapClick = (e: { latlng: { lat: number; lng: number } }) => {
        if (!customIcon) return;

        const { lat, lng } = e.latlng;
        setGuess([lat, lng]);
        const dist = getDistance(
            lat,
            lng,
            currentAddress.coords[0],
            currentAddress.coords[1]
        );
        setDistance(dist);
    };

    const nextRound = () => {
        setScoreboard([...scoreboard, distance ?? 0]);
        setDistance(null);
        setGuess(null);
        const newAddress: Address =
            addresses[Math.floor(Math.random() * addresses.length)];
        setCurrentAddress({
            name: newAddress.name,
            coords: [newAddress.coords[0], newAddress.coords[1]],
        });
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Guess the Location</h1>
            <p className="mb-2">Find: {currentAddress.name}</p>
            <MapContainer
                center={ZugCoordinates}
                zoom={15}
                className="h-96 w-full"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                {customIcon && guess && (
                    <Marker position={guess} icon={customIcon} />
                )}
                {customIcon && distance !== null && (
                    <Marker
                        position={currentAddress.coords}
                        icon={customIcon}
                    />
                )}
                {customIcon && guess && distance !== null && (
                    <Polyline
                        positions={[guess, currentAddress.coords]}
                        color="red"
                        weight={3}
                    />
                )}
                <MapClickHandler onClick={handleMapClick} />
            </MapContainer>
            {distance !== null && (
                <p className="mt-2">
                    Your guess was {distance.toFixed(2)} km away!
                </p>
            )}
            <button
                onClick={nextRound}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Next Address
            </button>
            <h2 className="mt-4 text-lg font-bold">Scoreboard</h2>
            <ul>
                {scoreboard.map((score, index) => (
                    <li key={index}>
                        Round {index + 1}: {score.toFixed(2)} km
                    </li>
                ))}
            </ul>
        </div>
    );
};

const MapClickHandler: React.FC<{
    onClick: (e: { latlng: { lat: number; lng: number } }) => void;
}> = ({ onClick }) => {
    useMapEvents({
        click: onClick,
    });
    return null;
};

export default LocationGuessingGame;

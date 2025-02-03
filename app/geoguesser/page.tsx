'use client';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const ZugCoordinates = [47.1662, 8.5155];
const addresses = [
    { name: 'Bundesplatz 1, 6300 Zug', coords: [47.1722, 8.5174] },
    { name: 'Baarerstrasse 14, 6300 Zug', coords: [47.1755, 8.5202] },
    { name: 'Poststrasse 1, 6300 Zug', coords: [47.1711, 8.5159] },
];

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // Radius of the Earth in km
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

const LocationGuessingGame = () => {
    const [currentAddress, setCurrentAddress] = useState(addresses[0]);
    const [guess, setGuess] = useState<[number, number] | null>(null);
    const [distance, setDistance] = useState<number | null>(null);
    const [scoreboard, setScoreboard] = useState<number[]>([]);

    const handleMapClick = (e: any) => {
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
        setCurrentAddress(
            addresses[Math.floor(Math.random() * addresses.length)]
        );
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
                {guess && <Marker position={guess} />}
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

const MapClickHandler = ({ onClick }: { onClick: (e: any) => void }) => {
    useMapEvents({
        click: onClick,
    });
    return null;
};

export default LocationGuessingGame;

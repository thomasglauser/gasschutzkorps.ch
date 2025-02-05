'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import addresses from './addresses';
import destinationImage from '/public/images/geoguesser/destination.png';
import guessImage from '/public/images/geoguesser/guess.png';

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

const ZugCoordinates: [number, number] = [47.1662, 8.5155];

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
    const [guessIcon, setGuessIcon] = useState<any>(null);
    const [locationIcon, setLocationIcon] = useState<any>(null);
    const [isGuessPlaced, setIsGuessPlaced] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(15);
    const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
    const [hasStarted, setHasStarted] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('leaflet').then((L) => {
                setGuessIcon(
                    new L.Icon({
                        iconUrl: guessImage.src,
                        iconSize: [32, 32],
                        iconAnchor: [16, 32],
                    })
                );
                setLocationIcon(
                    new L.Icon({
                        iconUrl: destinationImage.src,
                        iconSize: [32, 32],
                        iconAnchor: [16, 32],
                    })
                );
            });
        }
    }, []);

    useEffect(() => {
        if (!hasStarted || isGuessPlaced) return; // Timer only runs when the game has started

        setTimer(15); // Reset timer
        setIsTimeUp(false); // Reset time-up flag

        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsTimeUp(true); // Time is up
                    setIsGuessPlaced(true); // Lock guessing
                    setDistance(100); // No guess = 0 points
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [hasStarted, isGuessPlaced]);

    const handleMapClick = (e: { latlng: { lat: number; lng: number } }) => {
        if (isGuessPlaced || !guessIcon || !locationIcon) return;

        const { lat, lng } = e.latlng;
        setGuess([lat, lng]);
        const dist = getDistance(
            lat,
            lng,
            currentAddress.coords[0],
            currentAddress.coords[1]
        );
        setDistance(dist);
        setIsGuessPlaced(true);
    };

    const nextRound = () => {
        let roundScore = 0;

        if (!isTimeUp && distance !== null) {
            roundScore = Math.max(0, Math.round(1000 - distance * 50));
        }

        setScoreboard([...scoreboard, roundScore]);
        setDistance(null);
        setGuess(null);
        setIsGuessPlaced(false);
        setIsTimeUp(false);
        setTimer(15);
        setHasStarted(false);

        const newAddress: Address =
            addresses[Math.floor(Math.random() * addresses.length)];
        setCurrentAddress({
            name: newAddress.name,
            coords: [newAddress.coords[0], newAddress.coords[1]],
        });
    };

    const FitBoundsHandler: React.FC<{
        guess: [number, number] | null;
        destination: [number, number];
    }> = ({ guess, destination }) => {
        const map = useMap();

        useEffect(() => {
            if (guess && destination) {
                map.fitBounds([guess, destination], { padding: [50, 50] });
            }
        }, [guess, destination, map]);

        return null;
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Guess the Location</h1>

            <MapContainer
                center={ZugCoordinates}
                zoom={15}
                className="h-96 w-full"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {guessIcon && guess && (
                    <Marker position={guess} icon={guessIcon} />
                )}
                {locationIcon && distance !== null && (
                    <Marker
                        position={currentAddress.coords}
                        icon={locationIcon}
                    />
                )}
                {guess && distance !== null && (
                    <Polyline
                        positions={[guess, currentAddress.coords]}
                        color="red"
                        weight={3}
                    />
                )}

                {guess && distance !== null && (
                    <FitBoundsHandler
                        guess={guess}
                        destination={currentAddress.coords}
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
                className={`mt-4 p-2 rounded ${
                    isGuessPlaced
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                }`}
                disabled={!isGuessPlaced}
            >
                Next Address
            </button>

            {!hasStarted ? (
                <button
                    onClick={() => setHasStarted(true)}
                    className="p-2 bg-green-500 text-white rounded"
                >
                    Start Round
                </button>
            ) : (
                <>
                    <p className="mb-2">Find: {currentAddress.name}</p>
                    <p className="mt-2 text-lg font-bold">
                        Time Left:{' '}
                        <span
                            className={
                                timer <= 5 ? 'text-red-500' : 'text-white'
                            }
                        >
                            {timer}s
                        </span>
                    </p>

                    {isTimeUp && (
                        <p className="text-red-500">
                            Time's up! You scored 0 points this round.
                        </p>
                    )}
                </>
            )}

            <h2 className="mt-4 text-lg font-bold">Scoreboard</h2>
            <ul>
                {scoreboard.map((score, index) => (
                    <li key={index}>
                        Round {index + 1}:{' '}
                        <span className="font-bold">{Math.round(score)}</span>{' '}
                        points
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

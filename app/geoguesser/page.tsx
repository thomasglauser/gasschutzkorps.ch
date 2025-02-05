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
        // TODO ADD REMAINING TIME TO CALCULATION
        // ********************

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
        <section className="pb-[120px] pt-[150px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-8/12">
                        <div>
                            <h2 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight">
                                Geoguesser Zug Edition
                            </h2>
                            <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                                {/* Start Button */}
                                {!hasStarted && !isTimeUp && (
                                    <div className="flex justify-center mt-6">
                                        <button
                                            onClick={() => setHasStarted(true)}
                                            className="px-6 py-2 rounded-lg text-white font-semibold bg-green-500 hover:bg-green-600 transition-all duration-300"
                                        >
                                            Start Round
                                        </button>
                                    </div>
                                )}

                                {hasStarted && (
                                    <p className="text-lg text-gray-700 mb-4 text-center">
                                        Find:{' '}
                                        <span className="font-bold">
                                            {currentAddress.name}
                                        </span>
                                    </p>
                                )}

                                {/* Timer */}
                                {hasStarted && !isTimeUp && (
                                    <div className="flex justify-center mt-4">
                                        <span className="text-3xl font-semibold text-red-500">
                                            {timer}s
                                        </span>
                                    </div>
                                )}

                                {/* Map Container */}
                                <MapContainer
                                    center={ZugCoordinates}
                                    zoom={15}
                                    className="h-96 w-full rounded-lg shadow-md mt-4"
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution="&copy; OpenStreetMap contributors"
                                    />
                                    {guessIcon && guess && (
                                        <Marker
                                            position={guess}
                                            icon={guessIcon}
                                        />
                                    )}
                                    {locationIcon && distance !== null && (
                                        <Marker
                                            position={currentAddress.coords}
                                            icon={locationIcon}
                                        />
                                    )}
                                    {guess && distance !== null && (
                                        <Polyline
                                            positions={[
                                                guess,
                                                currentAddress.coords,
                                            ]}
                                            color="red"
                                            weight={3}
                                        />
                                    )}
                                    <MapClickHandler onClick={handleMapClick} />
                                </MapContainer>

                                {/* Distance Information */}
                                {distance !== null && (
                                    <p className="mt-4 text-lg text-gray-800">
                                        Your guess was{' '}
                                        <span className="font-semibold text-red-500">
                                            {distance.toFixed(2)} km
                                        </span>{' '}
                                        away!
                                    </p>
                                )}

                                {/* Next Round Button */}
                                <div className="flex justify-center mt-4">
                                    <button
                                        onClick={nextRound}
                                        disabled={!isGuessPlaced && !isTimeUp}
                                        className={`px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 ${
                                            isGuessPlaced || isTimeUp
                                                ? 'bg-blue-500 hover:bg-blue-600'
                                                : 'bg-gray-400 cursor-not-allowed'
                                        }`}
                                    >
                                        Next Address
                                    </button>
                                </div>

                                {/* Scoreboard */}
                                <div className="mt-6">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        Scoreboard
                                    </h2>
                                    <ul className="mt-2 space-y-2">
                                        {scoreboard.map((score, index) => (
                                            <li
                                                key={index}
                                                className="flex justify-between text-lg text-gray-700"
                                            >
                                                <span>Round {index + 1}:</span>
                                                <span className="font-semibold text-green-500">
                                                    {score} points
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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

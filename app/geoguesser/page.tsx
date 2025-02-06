'use client';

// Import necessary dependencies from React and Next.js
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Import address data and images for the game
import addresses from './addresses';
import destinationImage from '/public/images/geoguesser/destination.png';
import guessImage from '/public/images/geoguesser/guess.png';

// Dynamically import Leaflet components to avoid SSR issues in Next.js
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

// Default map coordinates for Zug, Switzerland
const ZugCoordinates: [number, number] = [47.1662, 8.5155];

// Define the address structure
interface Address {
    name: string;
    coords: [number, number];
}

// Define the scoreboard entry structure
interface ScoreEntry {
    address: string;
    score: number;
}

// Function to calculate the distance between two geographical points using the Haversine formula
function getDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
): number {
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

const LocationGuessingGame: React.FC = () => {
    // State variables for game logic
    const [currentAddress, setCurrentAddress] = useState<Address>(addresses[0]); // Current location to guess
    const [guess, setGuess] = useState<[number, number] | null>(null); // User's guess
    const [distance, setDistance] = useState<number | null>(null); // Distance between guess and actual location
    const [scoreboard, setScoreboard] = useState<ScoreEntry[]>([]); // Stores scores along with addresses
    const [guessIcon, setGuessIcon] = useState<any>(null); // Custom icon for guess marker
    const [locationIcon, setLocationIcon] = useState<any>(null); // Custom icon for actual location marker
    const [isGuessPlaced, setIsGuessPlaced] = useState<boolean>(false); // Flag to track if a guess has been placed
    const [timer, setTimer] = useState<number>(10); // Countdown timer for guessing
    const [isTimeUp, setIsTimeUp] = useState<boolean>(false); // Flag to indicate when time runs out
    const [hasStarted, setHasStarted] = useState<boolean>(false); // Flag to indicate if the game has started

    // Function to select a new random address for the next round
    function getNewAddress() {
        const newAddress: Address =
            addresses[Math.floor(Math.random() * addresses.length)];
        setCurrentAddress({
            name: newAddress.name,
            coords: [newAddress.coords[0], newAddress.coords[1]],
        });
    }

    // Function to calculate score based on distance and time
    function calculateScore(distance: number, time: number): number {
        const MAX_POINTS = 1000;
        const MAX_DISTANCE = 10; // Max distance in km
        const MAX_TIME = 10; // Max time in seconds
        const ALPHA = 2; // Distance penalty factor
        const BETA = 1; // Time penalty factor

        // Ensure values are within limits
        const normalizedDistance = Math.min(
            Math.max(distance, 0),
            MAX_DISTANCE
        );

        let remainingTime = 10 - time;
        const normalizedTime = Math.min(Math.max(remainingTime, 0), MAX_TIME);

        // Compute score based on distance and time penalties
        const distanceFactor = Math.pow(
            1 - normalizedDistance / MAX_DISTANCE,
            ALPHA
        );
        const timeFactor = Math.pow(1 - normalizedTime / MAX_TIME, BETA);

        return Math.round(MAX_POINTS * distanceFactor * timeFactor);
    }

    // Load custom icons when the component mounts
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

    // Timer logic to count down when the game starts
    useEffect(() => {
        if (!hasStarted || isGuessPlaced) return;

        setTimer(10);
        setIsTimeUp(false);

        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsTimeUp(true);
                    setIsGuessPlaced(true);
                    setHasStarted(false);
                    setScoreboard([
                        ...scoreboard,
                        { address: 'Zeit abgelaufen', score: 0 },
                    ]);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [hasStarted, isGuessPlaced]);

    // Handle user clicking on the map to place a guess
    const handleMapClick = (e: { latlng: { lat: number; lng: number } }) => {
        if (isGuessPlaced || !hasStarted || !guessIcon || !locationIcon) return;

        const { lat, lng } = e.latlng;
        setGuess([lat, lng]);
        const dist = getDistance(
            lat,
            lng,
            currentAddress.coords[0],
            currentAddress.coords[1]
        );

        let roundScore = 0;

        if (!isTimeUp && dist !== null) {
            roundScore = calculateScore(dist, timer);
        }

        setScoreboard([
            ...scoreboard,
            { address: currentAddress.name, score: roundScore },
        ]);
        setDistance(dist);
        setIsGuessPlaced(true);
        setHasStarted(false);
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

    const toggleGameState = () => {
        if (!hasStarted) {
            getNewAddress();
            setHasStarted(true);
            setDistance(null);
            setGuess(null);
            setIsGuessPlaced(false);
            setIsTimeUp(false);
            setTimer(10);
        }
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
                                {!hasStarted && (
                                    <div className="flex justify-center">
                                        <button
                                            onClick={toggleGameState}
                                            className="my-6 px-6 py-2 rounded-lg text-white font-semibold bg-green-500 hover:bg-green-600 transition-all duration-300"
                                        >
                                            Start
                                        </button>
                                    </div>
                                )}

                                {/* Address */}
                                {hasStarted && (
                                    <p className="text-lg text-gray-700 mb-4 text-center">
                                        Gesucht:{' '}
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

                                    {guess && distance !== null && (
                                        <FitBoundsHandler
                                            guess={guess}
                                            destination={currentAddress.coords}
                                        />
                                    )}

                                    <MapClickHandler onClick={handleMapClick} />
                                </MapContainer>

                                {/* Distance Information */}
                                {distance !== null && !isTimeUp && (
                                    <p className="mt-4 text-lg text-gray-800">
                                        Du warst{' '}
                                        <span className="font-semibold text-red-500">
                                            {distance.toFixed(2)} km
                                        </span>{' '}
                                        von{' '}
                                        <span className="font-semibold text-red-500">
                                            {currentAddress.name}
                                        </span>{' '}
                                        entfernt.
                                    </p>
                                )}

                                {/* Time is up message */}
                                {isTimeUp && (
                                    <p className="mt-4 text-lg font-semibold text-red-500">
                                        Die Zeit ist leider abgelaufen!
                                    </p>
                                )}

                                {/* Scoreboard */}
                                <div className="mt-6">
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        Scoreboard
                                    </h2>
                                    <ul className="mt-2 space-y-2">
                                        <ul className="mt-2 space-y-2">
                                            {scoreboard.map((entry, index) => (
                                                <li
                                                    key={index}
                                                    className="flex justify-between text-lg text-gray-700"
                                                >
                                                    <span>
                                                        Runde {index + 1}:{' '}
                                                        {entry.address}
                                                    </span>
                                                    <span className="font-semibold text-green-500">
                                                        {entry.score} Punkte
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        {/* Total Score */}
                                        <div className="mt-4 text-lg font-semibold text-gray-900">
                                            Gesamtpunktzahl:{' '}
                                            <span className="text-green-600">
                                                {scoreboard.reduce(
                                                    (total, entry) =>
                                                        total + entry.score,
                                                    0
                                                )}{' '}
                                                Punkte
                                            </span>
                                        </div>
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

'use client';

import { useState } from 'react';

import Person from './Person';

import mlimacherImage from '/public/images/persons/michael-limacher.webp';
import tglauserImage from '/public/images/persons/thomas-glauser.webp';
import mskupchImage from '/public/images/persons/markus-skupch.webp';
import rjennyImage from '/public/images/persons/roman-jenny.webp';
import mschüleImage from '/public/images/persons/martina-schüle.webp';

const PersonGroup = () => {
    const [hoveredPerson, setHoveredPerson] = useState<string | null>(null);
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex justify-center mt-20">
                    <Person
                        id="mlimacher"
                        firstname="Michael"
                        lastname="Limacher"
                        primaryFunction="Präsident"
                        imagePath={mlimacherImage}
                        hoveredPerson={hoveredPerson}
                        setHoveredPerson={setHoveredPerson}
                    />
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 lg:gap-48">
                    <Person
                        id="tglauser"
                        firstname="Thomas"
                        lastname="Glauser"
                        primaryFunction="Beisitzer"
                        imagePath={tglauserImage}
                        hoveredPerson={hoveredPerson}
                        setHoveredPerson={setHoveredPerson}
                    />
                    <Person
                        id="mskupch"
                        firstname="Markus"
                        lastname="Skupch"
                        primaryFunction="Beisitzer"
                        imagePath={mskupchImage}
                        hoveredPerson={hoveredPerson}
                        setHoveredPerson={setHoveredPerson}
                    />
                    <Person
                        id="rjenny"
                        firstname="Roman"
                        lastname="Jenny"
                        primaryFunction="Kassier"
                        imagePath={rjennyImage}
                        hoveredPerson={hoveredPerson}
                        setHoveredPerson={setHoveredPerson}
                    />
                    <Person
                        id="mschüle"
                        firstname="Martina"
                        lastname="Schüle"
                        primaryFunction="Aktuarin"
                        imagePath={mschüleImage}
                        hoveredPerson={hoveredPerson}
                        setHoveredPerson={setHoveredPerson}
                    />
                </div>
            </div>
        </>
    );
};

export default PersonGroup;

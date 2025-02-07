interface Address {
    name: string;
    coords: [number, number];
}

const addresses: Address[] = [
    {
        name: 'Aabachstrasse 8',
        coords: [47.173151, 8.511385],
    },
    {
        name: 'Ägeristrasse 17',
        coords: [47.166433, 8.518116],
    },
    {
        name: 'Artherstrasse 15',
        coords: [47.162854, 8.514104],
    },
    {
        name: 'Baarerstrasse 1',
        coords: [47.171352, 8.515929],
    },
    {
        name: 'Bahnhofstrasse 1',
        coords: [47.168323, 8.515557],
    },
    {
        name: 'Bellevueweg 2',
        coords: [47.154513, 8.519649],
    },
    {
        name: 'Bleichistrasse 7',
        coords: [47.175078, 8.51868],
    },
    {
        name: 'Bohlstrasse 21',
        coords: [47.16404, 8.519591],
    },
    {
        name: 'Brüschrain 9',
        coords: [47.156884, 8.521429],
    },
    {
        name: 'Bundesplatz 2',
        coords: [47.168323, 8.515557],
    },
    {
        name: 'Chamerstrasse 120',
        coords: [47.178914, 8.492349],
    },
    {
        name: 'Dammstrasse 19',
        coords: [47.176343, 8.514475],
    },
    {
        name: 'Dorfstrasse 11',
        coords: [47.165767, 8.51756],
    },
    {
        name: 'Eichwaldstrasse 7',
        coords: [47.180893, 8.506215],
    },
    {
        name: 'Eschenring 2',
        coords: [47.182218, 8.518773],
    },
    {
        name: 'Fadenstrasse 2',
        coords: [47.16998048351244, 8.525408444514538],
    },
    {
        name: 'Feldstrasse 3',
        coords: [47.180148, 8.511766],
    },
    {
        name: 'Fischmarkt 1',
        coords: [47.166341, 8.514496],
    },
    {
        name: 'Gartenstadt 5',
        coords: [47.17843, 8.512327],
    },
    {
        name: 'Gartenstrasse 7',
        coords: [47.170133, 8.514815],
    },
    {
        name: 'Gärtliweg 13',
        coords: [47.179013, 8.517856],
    },
    {
        name: 'Gotthardstrasse 14',
        coords: [47.172289, 8.51547],
    },
    {
        name: 'Grabenstrasse 5',
        coords: [47.16527, 8.515134],
    },
    {
        name: 'Grundweg 4',
        coords: [47.177313, 8.520473],
    },
    {
        name: 'Gubelstrasse 24',
        coords: [47.174923, 8.514046],
    },
    {
        name: 'Guggitalring 7',
        coords: [47.15633928916386, 8.518005828910777],
    },
    {
        name: 'Haldenstrasse 6',
        coords: [47.173939, 8.520551],
    },
    {
        name: 'Hänibüel 18',
        coords: [47.15795691928422, 8.517477129322696],
    },
    {
        name: 'Hertistrasse 53',
        coords: [47.179108996578776, 8.510267606938694],
    },
    {
        name: 'Hofstrasse 5',
        coords: [47.162141, 8.516688],
    },
    {
        name: 'Ibelweg 18',
        coords: [47.181234, 8.52495],
    },
    {
        name: 'Im Rank 8',
        coords: [47.18068, 8.491948],
    },
    {
        name: 'Im Rötel 15',
        coords: [47.166657008334525, 8.526207918212156],
    },
    {
        name: 'Industriestrasse 16',
        coords: [47.17308, 8.518994],
    },
    {
        name: 'Kolinplatz 7',
        coords: [47.166223, 8.515877],
    },
    {
        name: 'Knopfliweg 6',
        coords: [47.165665264331324, 8.518220750760669],
    },
    {
        name: 'Löberenstrasse 12',
        coords: [47.168337, 8.520423],
    },
    {
        name: 'Mattenstrasse 5',
        coords: [47.177734, 8.522438],
    },
    {
        name: 'Meisenbergstrasse 7',
        coords: [47.15547764244161, 8.515436417575684],
    },
    {
        name: 'Metallstrasse 9',
        coords: [47.173605, 8.518287],
    },
    {
        name: 'Neugasse 15',
        coords: [47.166956, 8.515678],
    },
    {
        name: 'Nelkenweg 7',
        coords: [47.17945717616154, 8.511418370119213],
    },
    {
        name: 'Obere Roostmatt 7',
        coords: [47.157573916956196, 8.515583492464923],
    },
    {
        name: 'Poststrasse 2',
        coords: [47.16785, 8.516653],
    },
    {
        name: 'Rosenbergstrasse 30',
        coords: [47.16583428238927, 8.522499245292083],
    },
    {
        name: 'Schanz 14',
        coords: [47.167087, 8.517361],
    },
    {
        name: 'Schwertstrasse 33',
        coords: [47.159781786409496, 8.519653024633037],
    },
    {
        name: 'Sonnenstrasse 7',
        coords: [47.17502925968761, 8.52123015217545],
    },
    {
        name: 'St.-Johannes-Strasse 22',
        coords: [47.180211, 8.504529],
    },
    {
        name: 'St.-Oswalds-Gasse 10',
        coords: [47.165498, 8.515781],
    },
    {
        name: 'Sterenweg 5',
        coords: [47.171017, 8.532668],
    },
    {
        name: 'Tirolerweg 8',
        coords: [47.177397, 8.517371],
    },
    {
        name: 'Unter Altstadt 3',
        coords: [47.165975, 8.514672],
    },
    {
        name: 'Unterleh 19',
        coords: [47.16606, 8.521793],
    },
    {
        name: 'Waldheimstrasse 2',
        coords: [47.164518, 8.522653],
    },
    {
        name: 'Weidstrasse 12',
        coords: [47.167881, 8.526682],
    },
    {
        name: 'Weinbergstrasse 45',
        coords: [47.16565663869035, 8.524373642805747],
    },
    {
        name: 'Widenstrasse 43',
        coords: [47.143760719544595, 8.510571652972438],
    },
    {
        name: 'Weststrasse 9',
        coords: [47.176877, 8.508489],
    },
    {
        name: 'Zugerbergstrasse 30',
        coords: [47.158902, 8.51844],
    },
];

export default addresses;

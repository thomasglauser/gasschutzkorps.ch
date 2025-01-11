import { Menu } from '@/types/menu';

const menuData: Menu[] = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        newTab: false,
    },
    {
        id: 2,
        title: 'Vorstand',
        path: '/vorstand',
        newTab: false,
    },
    {
        id: 3,
        title: 'Verein',
        newTab: false,
        submenu: [
            {
                id: 31,
                title: 'Anlässe',
                path: '/events',
                newTab: false,
            },
            {
                id: 32,
                title: 'Geschichte',
                path: '/geschichte',
                newTab: false,
            },
        ],
    },
    {
        id: 4,
        title: 'Veteranen',
        path: '/veteranen',
        newTab: false,
    },

    {
        id: 5,
        title: 'Kontakt',
        path: '/kontakt',
        newTab: false,
    },
];

export default menuData;

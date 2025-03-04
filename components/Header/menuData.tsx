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
        title: 'Anlässe',
        path: '/events',
        newTab: false,
    },
    {
        id: 4,
        title: 'Statuten',
        path: '/statuten',
        newTab: false,
    },
    {
        id: 5,
        title: 'Geschichte',
        path: '/geschichte',
        newTab: false,
    },
    {
        id: 6,
        title: 'Veteranen',
        path: '/veteranen',
        newTab: false,
    },

    {
        id: 7,
        title: 'Kontakt',
        path: '/kontakt',
        newTab: false,
    },
];

export default menuData;

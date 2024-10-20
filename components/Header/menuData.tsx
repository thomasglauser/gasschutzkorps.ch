import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Vorstand",
    path: "/vorstand",
    newTab: false,
  },
  {
    id: 3,
    title: "Mannschaft",
    path: "/mannschaft",
    newTab: false,
  },

  {
    id: 4,
    title: "Verein",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Anlässe",
        path: "/events",
        newTab: false,
      },
      {
        id: 42,
        title: "Geschichte",
        path: "/geschichte",
        newTab: false,
      },
      {
        id: 43,
        title: "Links",
        path: "/links",
        newTab: false,
      },
      {
        id: 44,
        title: "Downloads",
        path: "/downloads",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Veteranen",
    path: "/veteranen",
    newTab: false,
  },

  {
    id: 6,
    title: "Kontakt",
    path: "/kontakt",
    newTab: false,
  },
];

export default menuData;

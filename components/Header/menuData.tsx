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
    title: "Verein",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Geschichte",
        path: "/geschichte",
        newTab: false,
      },
      {
        id: 22,
        title: "Vorstand",
        path: "/vorstand",
        newTab: false,
      },
      ,
      {
        id: 23,
        title: "Mannschaft",
        path: "/mannschaft",
        newTab: false,
      },
      {
        id: 24,
        title: "Anlässe",
        path: "/events",
        newTab: false,
      },
      {
        id: 25,
        title: "Downloads",
        path: "/downloads",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Veteranen",
    path: "/veteranen",
    newTab: false,
  },
  {
    id: 4,
    title: "Links",
    path: "/links",
    newTab: false,
  },
  {
    id: 5,
    title: "Kontakt",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;

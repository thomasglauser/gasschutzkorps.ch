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
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: "Vorstand",
        path: "/contact",
        newTab: false,
      },
      {
        id: 23,
        title: "Anlässe",
        path: "/blog",
        newTab: false,
      },
      {
        id: 24,
        title: "Fotoalben",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 25,
        title: "Downloads",
        path: "/blog-details",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Veteranen",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Links",
    path: "/blog",
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

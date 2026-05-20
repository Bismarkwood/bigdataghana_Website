import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },

  {
    id: 2,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Who We Are",
        newTab: false,
        path: "/about",
      },
      {
        id: 22,
        title: "Projects",
        newTab: false,
        path: "/projects",
      },
      {
        id: 23,
        title: "Team",
        newTab: false,
        path: "/team",
      },
      {
        id: 24,
        title: "CSR",
        newTab: false,
        path: "/csr",
      },
    ],
  },

  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Geospatial",
        newTab: false,
        path: "/geospatialServices",
      },
      {
        id: 32,
        title: "Cloud Computing",
        newTab: false,
        path: "/cloudServices",
      },
      {
        id: 33,
        title: "Data Analytics and AI",
        newTab: false,
        path: "/dataAIServices",
      },
    ],
  },

  {
    id: 4,
    title: "News/Events",
    newTab: false,
    path: "/blog",
  },

  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    title: "FAQ",
    newTab: false,
    path: "/faq",
  },
];

export default menuData;

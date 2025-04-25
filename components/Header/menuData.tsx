import { Menu } from "@/types/menu";

// const menuData: Menu[] = [
//   {
//     id: 1,
//     title: "Home",
//     newTab: false,
//     path: "/",
//   },

//   {
//     id: 2,
//     title: "About",
//     newTab: false,
//     path: "/about",
//   },
//   {
//     id: 3,
//     title: "Services",
//     newTab: false,
//     submenu: [
//       {
//         id: 31,
//         title: "Land Acquisiton",
//         newTab: false,
//         path: "/services",
//       },
//       {
//         id: 32,
//         title: "General Construction",
//         newTab: false,
//         path: "/services",
//       },
//       {
//         id: 33,
//         title: "Project Management",
//         newTab: false,
//         path: "/services",
//       },
//       {
//         id: 34,
//         title: "Facility Management",
//         newTab: false,
//         path: "/services",
//       },
//       {
//         id: 35,
//         title: "Architecture & Engineering",
//         newTab: false,
//         path: "/services",
//       },
//     ],
//   },

//   {
//     id: 4,
//     title: "Lands & Properties",
//     newTab: false,
//     submenu: [
//       {
//         id: 41,
//         title: "Grace City",
//         newTab: false,
//         path: "/landsAndProperties",
//       },
//       {
//         id: 42,
//         title: "The View",
//         newTab: false,
//         path: "/landsAndProperties",
//       },
//       {
//         id: 43,
//         title: "Black Star Village",
//         newTab: false,
//         path: "/landsAndProperties",
//       },
//       {
//         id: 44,
//         title: "The Decade",
//         newTab: false,
//         path: "/landsAndProperties",
//       },
//     ],
//   },

//   {
//     id: 5,
//     title: "Blog",
//     newTab: false,
//     path: "/blog",
//   },

//   {
//     id: 6,
//     title: "Contact Us",
//     newTab: false,
//     path: "/contact",
//   },
// ];

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
        path: "/about",
      },
      {
        id: 23,
        title: "Services",
        newTab: false,
        path: "/about",
      },
      {
        id: 24,
        title: "Team",
        newTab: false,
        path: "/about",
      },
    ],
  },

  {
    id: 5,
    title: "News",
    newTab: false,
    path: "/blog",
  },

  {
    id: 6,
    title: "Contact Us",
    newTab: false,
    path: "/contact",
  },
  {
    id: 4,
    title: "FAQ",
    newTab: false,
    path: "/properties",
  },
];

export default menuData;

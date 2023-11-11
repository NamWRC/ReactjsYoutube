import {
    faHome,
    faCamera,
    faFolder,
    faImagePortrait,
    faClockRotateLeft,
    faFire,
    faMusic,
    faGamepad,
    faNewspaper,
    faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const mainData = [
    {
        icon: faHome,
        name: "Home",
    },
    {
        icon: faCamera,
        name: "Short",
    },
    {
        icon: faFolder,
        name: "Subsciptions",
    },
];
const sideData = [
    {
        icon: faImagePortrait,
        name: "You",
    },
    {
        icon: faClockRotateLeft,
        name: "History",
    },
];

const exploreData = [
    {
        icon: faFire,
        name: "Trending",
    },
    {
        icon: faMusic,
        name: "Music",
    },
    {
        icon: faGamepad,
        name: "Gaming",
    },
    {
        icon: faNewspaper,
        name: "News",
    },
    {
        icon: faTrophy,
        name: "Sport",
    },
];

export { mainData, sideData, exploreData };

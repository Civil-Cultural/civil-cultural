import { IconType } from "react-icons";

/* ----------- ICONS ----------- */
import { IoHome, IoNewspaperSharp } from "react-icons/io5";
import { MdOutlineArticle, MdPostAdd } from "react-icons/md";

interface LinkMenu {
    title: string;
    href: string;
    Icon: IconType;
}

export const linksMenu: LinkMenu[] = [
    {
        title: "components.sidebar.topic",
        href: "/",
        Icon: IoHome,
    },
    {
        title: "components.sidebar.article",
        href: "/#",
        Icon: IoNewspaperSharp,
    },
    {
        title: "components.sidebar.news",
        href: "/#",
        Icon: MdOutlineArticle,
    },
    {
        title: "components.sidebar.create_publication",
        href: "/publication/create",
        Icon: MdPostAdd,
    },
];

import { IconType } from "react-icons";

/* ----------- ICONS ----------- */
import { IoHome, IoNewspaperSharp } from "react-icons/io5";
import {
  MdOutlineArticle,
  MdOutlineLightMode,
  MdDarkMode,
} from "react-icons/md";

interface LinkMenu {
  title: string;
  href: string;
  Icon: IconType;
}

export const linksMenu: LinkMenu[] = [
  {
    title: "Inicio",
    href: "/",
    Icon: IoHome,
  },
  {
    title: "Notícias",
    href: "/#",
    Icon: IoNewspaperSharp,
  },
  {
    title: "Artigos",
    href: "/#",
    Icon: MdOutlineArticle,
  },
];

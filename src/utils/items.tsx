import { v4 as uuidv4 } from "uuid";
import { IHelp, IMenu } from "../components/MainMenu/MainMenu";

export const menu: IMenu[] = [
  {
    id: uuidv4(),
    src: "../../../assets/icons/ICON-Search.png",
    title: "Search",
  },
  {
    id: uuidv4(),
    src: "../../../assets/icons/Group46.png",
    title: " Home",
  },
  {
    id: uuidv4(),
    src: "../../../assets/icons/Group56.png",
    title: "TV Shows",
  },
  {
    id: uuidv4(),
    src: "../../../assets/icons/Group54.png",
    title: "Movies",
  },
  {
    id: uuidv4(),
    src: "../../../assets/icons/Group53.png",
    title: "Genres",
  },
  {
    id: uuidv4(),
    src: "../../../assets/icons/Group47.png",
    title: "Watch Later",
  },
];

export const help: IHelp[] = [
  {
    id: uuidv4(),
    title: "Language",
  },
  {
    id: uuidv4(),
    title: "Get Help",
  },
  {
    id: uuidv4(),
    title: "Exit",
  },
];

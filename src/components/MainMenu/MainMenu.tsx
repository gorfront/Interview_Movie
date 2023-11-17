import React from "react";
import { help, menu } from "../../utils/items";

import "./MainMenu.scss";

export interface IMenu {
  id: string;
  src: string;
  title: string;
}

export interface IHelp {
  id: string;
  title: string;
}

const MainMenu: React.FC = () => {
  return (
    <div className="mainMenu">
      <div className="mainMenu__user">
        <img src="Seong_Gi-hun.webp" alt="Seong_Gi-hun" />
        <p className="mainMenu__user__name">Daniel</p>
      </div>
      <ul className="mainMenu__body">
        {menu.map((item) => (
          <li key={item.id} className="mainMenu__body__item">
            <img src={item.src} alt={item.title} />
            <p className="mainMenu__body__item--title">{item.title}</p>
          </li>
        ))}
      </ul>

      <ul className="mainMenu__footer">
        {help.map((item) => (
          <li key={item.id} className="mainMenu__footer--item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;

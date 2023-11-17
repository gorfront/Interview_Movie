import React, { useEffect, useState } from "react";
import data from "../../../assets/data.json";

import "./Trending.scss";
import { backgroundChange } from "../../utils/backgroundChange";
import { editHandler } from "../../utils/editHandler";

export interface ITrendingItems {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl: string;
  Description: string;
}

const Trending: React.FC<{
  observer: boolean;
  setObserver: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ observer, setObserver }) => {
  const [trendingItems, setTrendingItems] = useState<ITrendingItems[]>([...data[0].TendingNow]);
  const slicedTrendingItems = trendingItems.slice(0, 50);

  useEffect(() => {
    const sessionStore = JSON.parse(sessionStorage.getItem("newData") || "[]");
    setTrendingItems(
      sessionStore.length
        ? sessionStore
        : [...data[0].TendingNow].sort(
            (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime(),
          ),
    );
  }, []);

  return (
    <div className="trending">
      <h1 className="trending__title">Trending Now</h1>
      <div className="trending__body">
        {slicedTrendingItems.map((item, i, arr) => (
          <img
            src={item.CoverImage}
            alt={item.Title}
            key={item.Id}
            onClick={() => {
              backgroundChange(item.Id);
              setObserver(!observer);
              setTrendingItems(editHandler(item, i, arr));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;

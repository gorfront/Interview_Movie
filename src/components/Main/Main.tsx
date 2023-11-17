import React, { useEffect, useRef, useState } from "react";
import data from "../../../assets/data.json";

import "./Main.scss";

interface IMain {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  Description: string;
  VideoUrl?: string;
}

const Main: React.FC<{ observer: boolean }> = ({ observer }) => {
  const [mainWindow, setMainWindow] = useState<IMain>(data[0].Featured);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const sessionItemId: string | null = sessionStorage.getItem("initialMoveId");
    setMainWindow(
      sessionItemId
        ? data[0].TendingNow.filter((el) => el.Id === sessionItemId)[0]
        : data[0].Featured,
    );
  }, [observer]);

  useEffect(() => {
    if (videoRef.current) {
      const timeoutId = setTimeout(() => {
        videoRef.current!.play().catch((error) => console.error("Autoplay error:", error));
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [mainWindow.VideoUrl]);

  return (
    <div
      className="main"
      style={{
        background: !mainWindow.VideoUrl ? `url(${mainWindow.CoverImage})` : "",
      }}
    >
      {mainWindow.VideoUrl && (
        <video ref={videoRef} className="main__video" controls={false} autoPlay={false}>
          <source src={mainWindow.VideoUrl} type="video/mp4" />
        </video>
      )}
      <h1 className="main__title">{mainWindow.Category}</h1>
      <img src={mainWindow.TitleImage} alt="TitleImage" />
      <div className="main__about">
        <p className="main__about--year">{mainWindow.ReleaseYear}</p>
        <p className="main__about--mpa">{mainWindow.MpaRating}</p>
        <p className="main__about--time">
          {Math.floor(Number(mainWindow.Duration) / 60)}h{" "}
          {Number(mainWindow.Duration) - Math.floor(Number(mainWindow.Duration) / 60) * 60 > 0
            ? `${Number(mainWindow.Duration) - Math.floor(Number(mainWindow.Duration) / 60) * 60}m`
            : ""}
        </p>
      </div>
      <p className="main__description">
        {mainWindow.Description?.length > 50
          ? `${mainWindow.Description.slice(0, 47)}...`
          : mainWindow.Description}
      </p>

      <div className="main__buttons">
        <button
          className="main__buttons--play main__buttons--but"
          onClick={() => videoRef.current?.play()}
        >
          <img src="play.svg" alt="play" />
          Play
        </button>
        <button className="main__buttons--more main__buttons--but">More Info</button>
      </div>
    </div>
  );
};

export default Main;

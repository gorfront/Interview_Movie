import React, { useState } from "react";
import MainMenu from "./components/MainMenu/MainMenu";
import Main from "./components/Main/Main";
import Trending from "./components/Trending/Trending";

const App: React.FC = () => {
  const [observer, setObserver] = useState(false);
  return (
    <>
      <MainMenu />
      <div className="body">
        <Main observer={observer}/>
        <Trending observer={observer} setObserver={setObserver} />
      </div>
    </>
  );
};

export default App;

import { useContext } from "react";
import PlayerContext from "./context/PlayerContext";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import Player from "./components/Player";

const App = () => {
  const { audioRef,Track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>

      <audio ref={audioRef} src={Track.file} preload="auto" />
      <Player />
    </div>
  );
};

export default App;

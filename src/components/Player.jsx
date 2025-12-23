import { songsData } from "../assets/assets";

const Player = () => {
  return (
    <div className="h-[10%] bg-black flex items-center justify-between px-4 text-white">
      <div className="flex items-center gap-4">
        <img src={songsData[0].image} className="w-12" />
        <div>
          <p>{songsData[0].name}</p>
          <p className="text-sm text-gray-400">{songsData[0].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;


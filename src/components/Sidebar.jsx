import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white">
      
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.home_icon} className="w-6" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.search_icon} className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} className="w-8" />
            <p className="font-semibold">Your Library</p>
          </div>

          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} className="w-5" />
            <img src={assets.plus_icon} className="w-5" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded flex flex-col gap-1">
          <h1 className="font-semibold">Create Your First Playlist</h1>
          <p className="text-sm text-gray-400">
            it's easy, we will help you
          </p>
          <button className="mt-4 px-4 py-1.5 bg-white text-black rounded-full">
            Create Playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded flex flex-col gap-1 mt-4">
          <h1 className="font-semibold">
            Let’s find some podcasts to follow
          </h1>
          <p className="text-sm text-gray-400">
            we’ll keep you updated
          </p>
          <button className="mt-4 px-4 py-1.5 bg-white text-black rounded-full">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

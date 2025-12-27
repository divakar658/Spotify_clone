import React, { useContext } from 'react'
import NavBar from './NavBar'
import { albumsData, assets, songsData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import PlayerContext from '../context/PlayerContext'
const DisplayAlbum = () => {
 const { id } = useParams();
const albumData = albumsData[id];
const {playwithid}=useContext(PlayerContext);

  return (
    <>
      <NavBar/>
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} alt="" className="w-48 rounded" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h1 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h1>
          <h4>{albumData.desc}</h4>
          <p className="mt-1 flex items-center gap-2 text-sm text-gray-400">
            <img src={assets.spotify_logo} alt="" className="w-5" />
            <b className="text-white">Spotify</b>
            • 13,234,345 likes
            • <b className="text-white">50 songs</b>
            • about 2 hours
          </p> 
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
      <p><b className="mr-4">#</b>Title</p>
      <p>Album</p>
      <p className="hidden sm:block">Date Added</p>
      <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
        <hr />
       {
  songsData.map((item, index) => (
    <div 
      onClick={()=>{playwithid(item.id)}}
      key={index}
      className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
    >
      {/* Title column */}
      <div className="flex items-center gap-4 text-white">
        <span className="text-[#a7a7a7] w-4">{index + 1}</span>
        <img src={item.image} alt="" className="w-10" />
        <span className="truncate">{item.name}</span>
      </div>

      {/* Album - hidden on mobile */}
      <p className="text-[15px] hidden sm:block">
        {albumData.name}
      </p>

      {/* Date - hidden on mobile */}
      <p className="text-[15px] hidden sm:block">
        3 days ago
      </p>

      {/* Duration */}
      <p className="text-[15px] text-center">
        {item.duration}
      </p>
    </div>
  ))
}

    </>
  )
}

export default DisplayAlbum
import React from 'react'
import NavBar from './NavBar'
import { albumsData, assets } from '../assets/assets'
import { useParams } from 'react-router-dom'
const DisplayAlbum = () => {
 const { id } = useParams();
const albumData = albumsData[id];

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

    </>
  )
}

export default DisplayAlbum
import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

const PlayerContext = createContext(null);

export const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg=useRef();
  const seekBar=useRef();
  const [Track,setTrack]=useState(songsData[1]);
  const [PlayStatus,setPlayStatus]=useState(false);
  const [Time,setTime]=useState(
    {
        currentTime:{
            second:0,
            minute:0

        },
        totalTime:
        {
             second:0,
            minute:0

        }

    }
  );
  const play=()=>
  {
     audioRef.current.play();
     setPlayStatus(true);
  }
    const pause=()=>
  {
     audioRef.current.pause();
     setPlayStatus(false);
  }
 const playwithid=async(id)=>
 {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
 }
 const previous=async()=>{
    if(Track.id>0)
    {
        await setTrack(songsData[Track.id-1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
 }
 const next=async()=>{
    if(Track.id<songsData.length-1)
    {
        await setTrack(songsData[Track.id+1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
 }
 const seekSong=async(e)=>{
        audioRef.current.currentTime=((e.nativeEvent.offsetX/seekBg.current.offsetWidth)*audioRef.current.duration);
 }
  const contextValue = {
    seekSong,
    audioRef,
    seekBar,
    seekBg,
    Track,
    setTrack,
    PlayStatus,
    setPlayStatus,
    Time,
    setTime,
    play,
    pause,
    playwithid,
    previous,
    next

  };
 useEffect(()=>{
    setTimeout(()=>
    {
        audioRef.current.ontimeupdate=()=>
            {
                seekBar.current.style.width=Math.floor(audioRef.current.currentTime/audioRef.current.duration*100)+"%";
            setTime(
                {
                    currentTime:
                    {
                    second:Math.floor(audioRef.current.currentTime%60),
                    minute:Math.floor(audioRef.current.currentTime/60),

                    },
                    totalTime:
                    {
                        second:Math.floor(audioRef.current.duration%60),
                        minute:Math.floor(audioRef.current.duration/60),

                    },
                }
             
            );
        };
    },1000);

 },[audioRef]);
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;

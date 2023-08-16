import "../styles/videocomponent.css"
import React, { useState,useRef } from 'react';

function VideoComponent({width,height}) {


 const videoRef= useRef(null)
 const [isPlaying,setIsPlaying]=useState(false)

 const togglePlay = ()=>{
  const playPromise = videoRef.current.play();

  if (isPlaying && playPromise !== undefined) {
   
    playPromise
      .then(() => {
        videoRef.current.pause();
        setIsPlaying(false);
      })
      .catch((error) => {console.log(error)});
  } else {
  
    videoRef.current.play();
    setIsPlaying(true);
  }
 }

  return (

    <div className='video-section'>
      <video  ref={videoRef}  width={width} height={height}  className='myvideo'>
        <source src="https://video-previews.elements.envatousercontent.com/files/3d502d14-c217-488c-8fca-3294c377f98e/video_preview_h264.mp4" />
        Your browser does not support the video tag. test video
        
      </video>

      <button className={`play-pause-btn ${isPlaying ? 'paused' : 'playing'}`} onClick={togglePlay}>
        {isPlaying ? '' : ''}
      </button>
      
    </div>
  
  );
}

export default VideoComponent;

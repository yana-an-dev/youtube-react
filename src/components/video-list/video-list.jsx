import React from 'react'
import VideoItem from '../video-item/video-item';

const VideoList = (props) => (

    <ul>
        {props.videos.map(video => (
            <VideoItem key={video.id} video={video} />
        ))}


    </ul>

);

export default VideoList;

// <ul className="video-card">
//             <img className="video-thumbnail" src={video.snippet.thumbnails.medium.url} alt="thumnails" />
//             <div className="video-text">
//                 <span className="text text-title">{video.snippet.title}</span>
//                 <span className="text text-channel-title">{video.snippet.channelTitle}</span>

//             </div>

// </ul>


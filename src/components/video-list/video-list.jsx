import React from 'react'
import VideoItem from '../video-item/video-item';
import styles from './video-list.module.css'

const VideoList = ({ videos, onVideoClick, display }) => (

    <ul className={styles.videos}>
        {videos.map(video => (
            <VideoItem
                key={video.id}
                onVideoClick={onVideoClick}
                video={video}
                display={display}
            />
        ))}


    </ul>

);

export default VideoList;

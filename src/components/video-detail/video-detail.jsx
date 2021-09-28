import styles from './video-detail.module.css'

import React from 'react';

const VideoDetail = ({ video }) => (
    <>
        <iframe
            className={styles.detail}
            key={video.id}
            width="100%" height="480"
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        <h1 className={styles.title}>{video.snippet.title}</h1>
        <h2 className={styles.channelTitle}>{video.snippet.channelTitle}</h2>
        <h3 className={styles.date}>{video.snippet.publishedAt}</h3>
        <p className={styles.description}>{video.snippet.description}</p>

    </>


)

export default VideoDetail;
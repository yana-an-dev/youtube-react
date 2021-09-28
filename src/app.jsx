import styles from './app.module.css'
import SearchHeader from './components/search-header/search-header';
import { useState, useEffect, useCallback } from 'react';
import VideoList from './components/video-list/video-list';
import VideoDetail from './components/video-detail/video-detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video)
  }, [])

  const search = useCallback((query) => {
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos)
        setSelectedVideo(null)
      }
      )
  }, [youtube])

  const clickHome = () => {
    setSelectedVideo(null)
  }

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos))
  }, [youtube])


  return (
    <div className={styles.app}>
      <SearchHeader
        onSearch={search}
        onHomeClick={clickHome} />
      <section className={styles.content}>

        {selectedVideo &&
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>}


        <div className={styles.videolist}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />

        </div>

      </section>

    </div>
  );
}

export default App;

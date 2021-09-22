
import './app.css'
import HeaderContainer from './containers/header';
import { useState, useEffect } from 'react';
import VideoList from './components/video-list/video-list';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDVurpLuofGfRPY-YLa67zIPMSfBiu1aGw", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));


  }, [])

  return (
    <>
      <HeaderContainer />
      <VideoList videos={videos} />
    </>
  );
}

export default App;

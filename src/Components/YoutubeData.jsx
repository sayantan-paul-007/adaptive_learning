import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YouTubeData = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        const API_KEY = 'AIzaSyDJz55ykfiOePwmLiobbgO_fJ_q0he5H2U';
        const CHANNEL_ID = 'UCBrk7LnxpQFyxfLf-2F4arQ'; // Replace with the channel ID you want to retrieve videos from // Number of videos to retrieve

        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=viewCount`
        );

        const videoData = response.data.items.map((item) => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url,
            views: item.statistics.viewCount,
            publishedAt: item.snippet.publishedAt,
          };
        });

        // Sort videos based on views in descending order
        videoData.sort((a, b) => b.views - a.views);

        // Get the top 3 most viewed videos
        const top3Videos = videoData.slice(0, 3);

        setVideos(top3Videos);
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      }
    };

    fetchYouTubeData();
  }, []);

  return (
    <div>
      <h1>Top 3 Most Viewed Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <img src={video.thumbnail} alt={video.title} />
            <p>Title: {video.title}</p>
            <p>Views: {video.views}</p>
            <p>Published At: {video.publishedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeData;

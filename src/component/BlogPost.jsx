import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router';

export default function BlogPost({ data }) {
  const [player, setPlayer] = useState(null);

  const params = useParams();
  const post = data.posts.find((dataItem) => dataItem.id === params.id);
  const youtubeID = post.url.split('v=')[1];

  const onReady = (e) => {
    setPlayer(e.target);
  };

  const onPlayHandler = () => {
    player.playVideo();
  };
  const onPauseHandler = () => {
    player.pauseVideo();
  };
  return (
    <div className="blog">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="player">
        <YouTube
          videoId={youtubeID}
          onReady={onReady}
          opts={{
            playerVars: {
              playlist: 'W-_X1HZM7ys,SM2PULNni8k,QjRV85ZIA1I,07scPVYfPKA,qIpVZ8eWIMQ,BjF6dbxHKfA,gFz3K7_bK_g,v4eKDJQoIeI,jBDhoUEqHgQ',
            },
          }}
        />
      </div>
      <button onClick={onPlayHandler} className="btn">
        Play
      </button>
      <button onClick={onPauseHandler} className="btn">
        Pause
      </button>
    </div>
  );
}
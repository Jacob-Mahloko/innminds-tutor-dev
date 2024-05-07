'use client'
import { FC } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useStyles } from './styles';

interface props{
    videoId?:string,
    children?:ChildNode
}

const YouTubePlayer:FC<props> = ({ videoId }) => {
const {styles}=useStyles();
  return ( 
    <div className={styles.container}>
        <ReactPlayer url={videoId}  controls={true} width="100%" height="100%" />
    </div>);
};

export default YouTubePlayer;

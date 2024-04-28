import React, { FC,useState, useEffect } from 'react';
import axios from 'axios';
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
        <ReactPlayer url='https://www.youtube.com/watch?v=H5GxH9atUNY'  controls={true} width="100%" height="100%" />
    </div>);
};

export default YouTubePlayer;

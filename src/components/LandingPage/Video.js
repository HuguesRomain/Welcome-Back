'use strict';
import React, { Component } from 'react'
import VideoCover from 'react-video-cover'


class Video extends Component {
  render() {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'absolute',
      }}>
        <video
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
          loop
          autoPlay
          src='https://www.youtube.com/watch?v=IUkz64bk-C4&feature=youtu.be' type='video/mp4'
        />
      </div>
    );
  }
}

export default Video
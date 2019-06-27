import React, { Component } from 'react'
import TitleIntro from '../Introduction/title'
import ChapterIntro3 from './ChapterIntro3'
import VideoChapter from '../ChapterGlobalComponent/VideoChapter'
import Veterans from '../Chapter3/Veterans'

import NextChapter from '../ChapterGlobalComponent/NextChapter'
import Transmission from './Transmission';

class Chapter3 extends Component {
  render () {
    return (
      <div className="chapter3">
        <div className='chapter3__content'>
          <TitleIntro />
          <ChapterIntro3 />
          <VideoChapter link={'https://www.youtube.com/embed/80H0fnT8sZs'}/>
          <Veterans />
          <Transmission />
          <NextChapter next={'Introduction'}/>
        </div>
      </div>
    )
  }
}

export default Chapter3
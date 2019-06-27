import React, { Component } from 'react'
import TitleIntro from '../Introduction/title'
import ChapterIntro3 from './ChapterIntro3'
import VideoChapter from '../ChapterGlobalComponent/VideoChapter'
import Veterans from '../Chapter3/Veterans'
import NextChapter from '../ChapterGlobalComponent/NextChapter'
import Measures from '../Chapter3/Measures'
import Therapy from '../Chapter3/Therapy'

class Chapter3 extends Component {
  render () {
    return (
      <div className="chapter3">
        <div className='chapter3__content'>
          <TitleIntro />
          <ChapterIntro3 />
          <VideoChapter link={'https://www.youtube.com/embed/80H0fnT8sZs'}/>
          <Veterans />
          <Measures />
          <VideoChapter link={'https://www.youtube.com/embed/LZqucSgOakc'}/>
          <Therapy />
          <VideoChapter link={'https://www.youtube.com/embed/eNphgZCXz40'}/>
          
          <NextChapter />
        </div>
      </div>
    )
  }
}

export default Chapter3
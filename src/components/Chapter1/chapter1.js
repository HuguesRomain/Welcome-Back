import React, { Component } from 'react';
//import Biography from '../'
import TitleIntro from '../Introduction/title'
import IntroChapter from '../ChapterGlobalComponent/ChapterIntro'
import ChapterSyndrome from '../ChapterGlobalComponent/ChapterSyndrome'
import VideoChapter from '../ChapterGlobalComponent/VideoChapter'
import TraumaticEvents from '../ChapterGlobalComponent/TraumaticEvents'

class Chapter1 extends Component {
  render () {
    return (
      <div className='chapter1'>
        <div className='chapter1__content'>
          <TitleIntro />
          <IntroChapter />
          <ChapterSyndrome />
          <VideoChapter />
          <TraumaticEvents />
        </div>
      </div>
    )
  }
}

export default Chapter1
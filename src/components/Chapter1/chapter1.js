import React, { Component } from 'react';
import TitleIntro from '../Introduction/title'
import IntroChapter1 from '../ChapterGlobalComponent/ChapterIntro'
import ChapterSyndrome from '../ChapterGlobalComponent/ChapterSyndrome'
import VideoChapter from '../ChapterGlobalComponent/VideoChapter'
import TraumaticEvents from '../ChapterGlobalComponent/TraumaticEvents'
import PtsdMechanism from '../ChapterGlobalComponent/ptsdMechanism'
import EndChapter from '../ChapterGlobalComponent/EndChapter'


class Chapter1 extends Component {
  render () {
    return (
      <div className='chapter1'>
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"></link>
        <div className='chapter1__content'>
          <TitleIntro />
          <IntroChapter1 />
          <ChapterSyndrome />
          <VideoChapter />
          <TraumaticEvents />
          <VideoChapter />
          <PtsdMechanism />
          <EndChapter />
        </div>
      </div>
    )
  }
}

export default Chapter1
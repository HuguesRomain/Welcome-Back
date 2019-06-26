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
          <VideoChapter link={"https://www.youtube.com/embed/QZ0zf4voIao?"}/>
          <TraumaticEvents />
          <VideoChapter link={"https://www.youtube.com/embed/Si7iPh4c5Q8"} />
          <PtsdMechanism />
          <EndChapter />
        </div>
      </div>
    )
  }
}

export default Chapter1
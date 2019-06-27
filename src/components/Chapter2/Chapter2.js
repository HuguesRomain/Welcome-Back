import React, { Component } from 'react'
import TitleIntro from '../Introduction/title'
import AudioTrack from '../ChapterGlobalComponent/Audio'
import IntroChapter from '../ChapterGlobalComponent/ChapterIntro'
import IntroChapter2 from './ChapterIntro2';
import QuoteChapter2 from './QuoteChapter2';
import VideoChapter from '../ChapterGlobalComponent/VideoChapter';
import SocialImpact from './SocialImpact';
import Addiction from './Addiction';

class Chapter2 extends Component {
  render () {
    return (
      <div className="chapter2">
        <TitleIntro />
        <IntroChapter2 />
        <QuoteChapter2 />
        <VideoChapter />
        <SocialImpact />
        <VideoChapter link={'https://www.youtube.com/embed/80H0fnT8sZs'}/>
        <Addiction />
      </div>
    )
  }
}

export default Chapter2
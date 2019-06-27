import React, { Component } from 'react'
import TitleIntro from '../Introduction/title'
import AudioTrack from '../ChapterGlobalComponent/Audio'
import IntroChapter from '../ChapterGlobalComponent/ChapterIntro'
import IntroChapter2 from './ChapterIntro2'
import VideoChapter from '../ChapterGlobalComponent/VideoChapter'
import SocialImpact from './SocialImpact'
import Addiction from './Addiction'
import Health from './Health'
import PersonalLife from './PersonalLife'
import NextChapter from '../ChapterGlobalComponent/NextChapter';

class Chapter2 extends Component {
  render () {
    return (
      <div className="chapter2">
         <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.7/css/all.css"></link>
        <TitleIntro />
        <IntroChapter2 />
        <VideoChapter link={'https://www.youtube.com/embed/80H0fnT8sZs'}/>
        <SocialImpact />
        <VideoChapter link={'https://www.youtube.com/embed/80H0fnT8sZs'}/>
        <Addiction />
        <Health />
        <VideoChapter link={'https://www.youtube.com/embed/80H0fnT8sZs'}/>
        <PersonalLife />
        <NextChapter next={'ChapterIII'}/>
      </div>
    )
  }
}

export default Chapter2
import React, { Component } from 'react'
import TitleIntro from '../Introduction/title'
import AudioTrack from '../ChapterGlobalComponent/Audio'
import IntroChapter from '../ChapterGlobalComponent/ChapterIntro'

class Chapter2 extends Component {
  render () {
    return (
      <div className="chapter1">
        <TitleIntro />
        <IntroChapter />
        <AudioTrack />
      </div>
    )
  }
}

export default Chapter2
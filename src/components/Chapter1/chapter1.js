import React, { Component } from 'react';
//import Biography from '../'
import TitleIntro from '../Introduction/title'
import IntroChapter from '../ChapterGlobalComponent/ChapterIntro'

class Chapter1 extends Component {
  render () {
    return (
      <div className="chapter1">
        <TitleIntro />
      </div>
    )
  }
}

export default Chapter1
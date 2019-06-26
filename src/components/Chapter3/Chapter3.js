import React, { Component } from 'react'
import TitleIntro from '../Introduction/title'
import  ChapterIntro3 from './ChapterIntro3'

class Chapter3 extends Component {
  render () {
    return (
      <div className="chapter3">
        <div className='chapter3__content'>
          <TitleIntro />
          <ChapterIntro3 />
        </div>
      </div>
    )
  }
}

export default Chapter3
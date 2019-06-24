import React, { Component } from 'react'
import textData from '../../data/ChapterData'

class IntroChapter extends Component {
  state={
    textState: {textData}
  }
  render () {
    return (
      <div className="IntroChapter">
        <h2>{this.state.textState.textData.chapter1.part1.text1}</h2>
        <p>{this.state.textState.textData.chapter1.part1.text2}</p>
      </div>
    )
  }
}

export default IntroChapter
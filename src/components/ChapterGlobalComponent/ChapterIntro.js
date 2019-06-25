import React, { Component } from 'react'
import textData from '../../data/ChapterData'

class IntroChapter extends Component {
  render () {
    return (
      <div className='IntroChapter'>
        <p>“I’m still scared of the dark”<br/>
        - John Musgrave -
        </p>
        <div className='contentIntroChapter'>

          <div className='part__introChapter'>
            <h3 className='nameIntroChapter'><span className='yellow__span'>John Musgrave</span></h3>
            <h4>First class 1st Battalion 9th Marines.</h4>
            <p>“I joined the Marine Corps ton be in the vasity. I have 
                never regretted that decision.

                I didn’t want to look in the mirror some morning and have 
                a guy looking back at me that hadn’t done everything for 
                what he belive.”  
            </p>
          </div>

          <div className='part__introChapter'>
            <img src="../../assets/img/musgrave.png" alt=""/>
            <p>oazpdad</p>
          </div>

        </div>
      </div>
    )
  }
}

export default IntroChapter


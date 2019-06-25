import React, { Component } from 'react'
import textData from '../../data/ChapterData'
import imgData from '../../data/imgData'
import AudioTrack from '../ChapterGlobalComponent/Audio'

class IntroChapter extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
      <div className='IntroChapter'>
        <h1>CHAPTER I</h1>
          <p className='quote1__chapter1'>“I’m still scared of the dark”<br/>
          - John Musgrave -
          </p>
        <div className='contentIntroChapter'>

          <div className='part__introChapter'>
            <div className='part__introChapter__Content'>
              <h3 className='nameIntroChapter'><span className='yellow__span'>JOHN MUSGRAVE</span></h3>
                <h4>First class 1st Battalion 9th Marines.</h4>
                  <p>“I joined the Marine Corps ton be in the vasity. I have 
                      never regretted that decision.<br></br><br></br>

                      I didn’t want to look in the mirror some morning and have 
                      a guy looking back at me that hadn’t <span className='yellow__span'>done everything for 
                      what he belive</span>.”  
                  </p>
            </div>
          </div>
          <div className='part__introChapter__Image'>
            <img className='Soldat1'src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Soldat1}`)} alt='logo' />
          </div>

        </div>
        <AudioTrack />
      </div>
    )
  }
}

export default IntroChapter


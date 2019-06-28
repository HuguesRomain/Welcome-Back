import React, { Component } from 'react'
import textData from '../../data/ChapterData'
import imgData from '../../data/imgData'
import AudioTrack from '../ChapterGlobalComponent/Audio'
import AudioData from '../../data/AudioData'
import {TimelineLite} from 'gsap'

class IntroChapter1 extends Component {
  state = {
    img: {imgData},
    AudioState: {AudioData}
  }
   
  constructor(props){
    super(props);
      this.tween = new TimelineLite({ paused:false });
  
      this.trace = null;
      this.apear = null;
      this.apear2 = null;
      this.apearImg1 = null;
      this.apearImg2 = null;
      this.apearImg3 = null;
      this.apearBio = null;
      }   
  
      componentDidMount(){
        this.tween
        .from(this.apear, 0.7,{ opacity: 0}, 0.5)
        .from(this.apear2, 0.7,{ opacity: 0})
        .from(this.trace, 1.5,{ height: 0}, 1.5)
        .from(this.apearBio, 0.5,{ x: 20, opacity: 0})
        .from(this.apearImg1, 1,{ x: -20, opacity: 0})
        .from(this.apearImg2, 1,{ x: -20, opacity: 0})
        .from(this.apearImg3, 1,{ x: -20, opacity: 0})
      }

  render () {
    return (
      <div className='IntroChapter'>
        <h1 ref={ h1 => this.apear = h1} >CHAPTER I</h1>
          <p className='quote1__chapter1' ref={ p => this.apear2 = p } >“I’m still scared of the dark”<br/>
          - John Musgrave -
          </p>
          <div className="trait" ref={ div => this.trace = div}></div>
        <div className='contentIntroChapter'>

          <div className='part__introChapter'>
            <div className='part__introChapter__Content' ref={ div => this.apearBio = div }>
              <h3 className='nameIntroChapter'><span className='yellow__span'>JOHN MUSGRAVE</span></h3>
                <h4>First class 1st Battalion 9th Marines.</h4>
                  <p>“I joined the Marine Corps ton be in the varsity. I have 
                      never regretted that decision.<br></br><br></br>

                      I didn’t want to look in the mirror some morning and have 
                      a guy looking back at me that hadn’t <span className='yellow__span'>done everything for 
                      what he belive</span>.”  
                  </p>
            </div>
          </div>
          <div className='part__introChapter__Image'>
            <img className='Soldat1'src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Soldat1}`)} alt='logo' ref={ img => this.apearImg1 = img }/>
            <img className='Soldat2'src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Soldat2}`)} alt='logo' ref={ img => this.apearImg2 = img }/>
            <img className='Soldat3'src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Soldat3}`)} alt='logo' ref={ img => this.apearImg3 = img }/>
          </div>

        </div>
        <AudioTrack audioLink={this.state.AudioState.AudioData.audio.chapter1Audio.audio1} />
        <p className="audioTrackSource">Extract from “The Vietnam War”, episode 2<br></br>
        John Musgrave</p>
      </div>
    )
  }
}

export default IntroChapter1


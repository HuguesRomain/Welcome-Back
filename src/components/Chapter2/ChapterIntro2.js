import React, { Component } from 'react'
import imgData from '../../data/imgData'
import AudioTrack from '../ChapterGlobalComponent/Audio'
import {TimelineLite} from 'gsap'


class IntroChapter2 extends Component {
  state = {
    img: {imgData},
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
        <h1 ref={ h1 => this.apear = h1}>CHAPTER II</h1>
          <p className='quote1__chapter1' ref={ p => this.apear2 = p }>“ Worse than what we experienced during the war“<br/>
          - Jim Markson -
          </p>
          <div className="traitIntroChap2" ref={ div => this.trace = div}></div>
        <div className='contentIntroChapter'>
          <div className='part__introChapter'>
            <div className='part__introChapter__Content' ref={ div => this.apearBio = div } >
              <h3 className='nameIntroChapter'><span className='yellow__span'>JIM MARKSON</span></h3>
                <h4>US Air Force 1966-1967</h4>
                  <p>“She explained it to me that : it's like trying to hold a rubber ball or a beach ball under water. And at first, it's easy. But it's always there. And it's constantly pushing, pushing, pushing. <br></br>

They diagnosed me with Ptsd 39 years after I left Vietnam. <br></br>

It was a relief to speak to people about this that are interested in it. And a the same time, it was that other side of the coin like, where was this? 

How did this affect the last 39 years of my life?”<br></br>

                      
                  </p>
            </div>
          </div>
          <div className='part__introChapter__Image'>
            <img className='Jim2'src={require(`../../assets/img/${this.state.img.imgData.Chapter2.Jim1}`)} alt='logo' ref={ img => this.apearImg1 = img }/>
            <img className='Jim1'src={require(`../../assets/img/${this.state.img.imgData.Chapter2.Jim2}`)} alt='logo' ref={ img => this.apearImg2 = img }/>
            <img className='Jim3'src={require(`../../assets/img/${this.state.img.imgData.Chapter2.Jim3}`)} alt='logo' ref={ img => this.apearImg3 = img }/>
          </div>
        </div>
      </div>
    )
  }
}

export default IntroChapter2


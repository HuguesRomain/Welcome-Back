import React, { Component } from 'react'
import imgData from '../../data/imgData'
import AudioData from '../../data/AudioData'
import {TimelineLite} from 'gsap'

class IntroChapter3 extends Component {
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
        }

  render () {
    return (
      <div className='IntroChapter'>
        <h1 ref={ h1 => this.apear = h1}>CHAPTER III</h1>
        <p className='quote2__chapter3__part1' ref={ p => this.apear2 = p }>
          “ My friends and I truly believed that the sleepless nights and depression would go away. 

        </p>
        
        <br/><br/>

        <p className='quote2__chapter3__part2'>
          - Jim Murphy -
        </p>
        <div className="trait" ref={ div => this.trace = div}></div>
        <div className='contentIntroChapter3'>

          <div className='part__introChapter3'>
            <div className='part__introChapter3__Content' ref={ div => this.apearBio = div } >
              <h3 className='nameIntroChapter3'><span className='yellow__span'>JIM MURPHY</span></h3>
                <h4>US Air Force : 1969</h4>
                  <p>“I am also a member of the Veterans for Peace (VFP) and I am also a leader of the
                     Association for Reconciliation (which works with the International Movement for 
                     Reconciliation in Paris) an organization that helps me to lead the struggles 
                     anti-war that I must undertake.”  
                  </p>
                  <img className='Murphy1'src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Murphy1}`)} alt='logo' />
                  <p className="audioTrackSource">
                  Interview for 4ACG  <br /> <br />Jim Murphy </p>
            </div>
          </div>
          <div className='part__introChapter3__Image'>
            <img className='Murphy2'src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Murphy2}`)} alt='logo' ref={ img => this.apearImg1 = img }/>
            <img className='Murphy3'src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Murphy3}`)} alt='logo' ref={ img => this.apearImg2 = img }/>
          </div>
          
        </div>
        <p className='quote2__chapter1__part1'>“We don't need parades, plaques and certificates, just respect and recognition”</p><br/><br/>
            <p className='quote2__chapter1__part2'>- Randy Fowler, Vietnam veteran -
            </p>
      </div>
    )
  }
}

export default IntroChapter3


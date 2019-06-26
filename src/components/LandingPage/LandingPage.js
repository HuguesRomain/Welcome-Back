import React, { Component, Fragment } from 'react'
import TitleLandingPage from './TitleLandingPage'
import ContentLandingPage from './ContentLandingPage'
import Button from './Button'
import Video from './Video'
import Audio from './AudioBackground'
import {TimelineLite} from 'gsap'

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.tween = new TimelineLite({ paused:false });

    this.back = null;
  }

  componentDidMount(){
    this.tween
      .to(this.back, 2,{ opacity: 0 }, 2)
  }
  render () {
    return (
      <Fragment>
        <Audio />
        <div className='landingPage'>
        
          <div className='content__LandingPage'> 
          
          <Video  />
          <div className='divBlack' ref={ div => this.back = div }></div>
            <TitleLandingPage />
            <ContentLandingPage />
            <Button name={'Start the story'} />    
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LandingPage;



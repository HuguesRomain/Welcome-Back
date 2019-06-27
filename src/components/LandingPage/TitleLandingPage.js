import React, { Component, Fragment } from 'react'
import { TimelineLite, CSSPlugin } from "gsap/all";

class TitleLandingPage extends Component {
  constructor(props){
    super(props);
    this.tween = new TimelineLite({ paused:false });

    this.titleApear = null;
    this.secondApear = null;
  }

  componentDidMount(){
    this.tween
      .from(this.titleApear, 1,{ autoAlpha: 0 })
      .from(this.secondApear, 2,{ autoAlpha: 0 })
  }
  render () {
    return (
      <Fragment>
        <h1 className='title__LandingPage' ref={ h1 => this.titleApear = h1 } >WELCOME BACK</h1>
        <h2 className='undesTitle__LandingPage' ref={ h2 => this.secondApear = h2 }>WAR IS NOT OVER</h2>
      </Fragment>
    )
  }
}

export default TitleLandingPage
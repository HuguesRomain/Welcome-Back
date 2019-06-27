import React, { Component, Fragment } from 'react'
import imgData from '../../data/imgData';
import {TimelineLite} from 'gsap';

class ContentLandingPage extends Component {
  state = {
    img: {imgData},
  }
  
  constructor(props){
    super(props);
    this.tween = new TimelineLite({ paused:false });

    this.textApear = null;
    this.imgApear = null;
  }

  componentDidMount(){
    this.tween
      .from(this.textApear, 1,{ autoAlpha: 0 }, 2)
      .from(this.imgApear, 2,{ autoAlpha: 0 })
  }

  render () {
    return (
      <Fragment>
        <p className='quote__LandingPage' ref={ p => this.textApear = p }>Vietnam’s war Trauma</p>
        <div className='logo__LandingPage' ref={ div => this.imgApear = div }>
          <img src={require(`../../assets/img/${this.state.img.imgData.LandingPage.Logo}`)} alt='logo' />
        </div>
      </Fragment>
    )
  }
}

export default ContentLandingPage
import React, { Component } from 'react'
import {TimelineLite} from 'gsap'

class DescriptionIntro extends Component {

    constructor(props){
      super(props);
      this.tween = new TimelineLite({ paused:false });
  
      this.apear = null;
    }

    componentDidMount(){
      this.tween
        .from(this.apear, 1,{ opacity: 0 }, 0.5)
    }

  render () {
    return (
      <div className='text__descrition__intro'>
        <p ref={ div => this.apear = div } >Between 1955 and 1975, the US is at war with Vietnam. More than nine million soldiers are sent to the front.</p>
      </div>
    )
  }
}

export default DescriptionIntro
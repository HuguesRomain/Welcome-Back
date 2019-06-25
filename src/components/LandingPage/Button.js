import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import {TimelineLite} from 'gsap'

class Button extends Component {
  state = {
    goToIntro: false,
  }

  constructor(props){
    super(props);
    this.tween = new TimelineLite({ paused:false });

    this.buttonApear = null;
  }

  componentDidMount(){
    this.tween
      .from(this.buttonApear, 1,{ y: 50, autoAlpha: 0}, 4)

  }
  
  handleIntro = () => {
    console.log('test')
    this.setState({goToIntro: true})
  }
  
  render () {
    if(this.state.goToIntro){
      return <Redirect push to={`/introduction`}></Redirect>
    }
    const { name } = this.props
  
    return (
      <Fragment>
        <div onClick={this.handleIntro} className='button__LandingPage' ref={ div => this.buttonApear = div }>{ name }</div>
      </Fragment>
    )
  }
}

export default Button



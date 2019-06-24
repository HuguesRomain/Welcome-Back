import React, { Component, Fragment } from 'react'
import imgData from '../../data/imgData';

class ContentLandingPage extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
      <Fragment>
        <p className='quote__LandingPage'>“The War is Only Begin“</p>
        <div className='logo__LandingPage'>
          <img src={require(`../../assets/img/${this.state.img.imgData.LandingPage.Logo}`)} alt='logo' />
        </div>
      </Fragment>
    )
  }
}

export default ContentLandingPage
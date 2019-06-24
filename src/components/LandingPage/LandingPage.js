import React, { Component, Fragment } from 'react'
import TitleLandingPage from './TitleLandingPage'
import ContentLandingPage from './ContentLandingPage'
import Button from './Button'
import Video from './Video'
import Audio from './Audio'

class LandingPage extends Component {
  render () {
    return (
      <Fragment>
        
        <div className='landingPage'>
          <div className='content__LandingPage'> 
          <Audio />
          <Video  />
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



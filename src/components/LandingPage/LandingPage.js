import React, { Component, Fragment } from 'react'
import TitleLandingPage from './TitleLandingPage'
import ContentLandingPage from './ContentLandingPage'
import Button from './Button'
import Video from './Video'
import Audio from './AudioBackground'

class LandingPage extends Component {
  render () {
    return (
      <Fragment>
        <Audio />
        <div className='landingPage'>
        
          <div className='content__LandingPage'> 
          
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



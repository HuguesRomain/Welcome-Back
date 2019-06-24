import React, { Component, Fragment } from 'react'
import TitleLandingPage from './TitleLandingPage'
import ContentLandingPage from './ContentLandingPage'
import Button from './Button'
import Video from './Video'

class LandingPage extends Component {
  render () {
    return (
      <Fragment>
        <Video  />
        <div className='landingPage'>
          <div className='content__LandingPage'> 
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



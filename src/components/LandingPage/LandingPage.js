import React, { Component } from 'react';
import TitleLandingPage from './TitleLandingPage'
import ContentLandingPage from './ContentLandingPage';
import Button from './Button';

class LandingPage extends Component {
  render () {
    return (
        <div className='landingPage'>
          <div className='content__LandingPage'>
            <TitleLandingPage />
            <ContentLandingPage />
            <Button name={'Start the story'} />    
          </div>
        
        </div>
    );
  }
}

export default LandingPage;



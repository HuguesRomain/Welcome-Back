import React, { Component } from 'react';
import TitleLandingPage from './TitleLandingPage'
import ContentLandingPage from './ContentLandingPage';
import Button from './Button';
import { Redirect } from 'react-router-dom'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {goToIntro: false};

    // This binding is necessary to make `this` work in the callback
    this.handleIntro = this.handleIntro.bind(this);
  }
  
  handleIntro() {
    this.setState(state => ({
      isToggleOn: true
    }));
  }

  render () {
    if(this.state.goToIntro){
      return <Redirect push to={`/introduction`}></Redirect>
    }
    return (
        <div className='landingPage'>
          <div className='content__LandingPage'>
            <TitleLandingPage />
            <ContentLandingPage />
            <Button onClick={this.handleIntro} name={'Start the story'} />    
          </div>
        </div>
    );
  }
}

export default LandingPage;



import React, { Component } from 'react';
import textData from '../../data/textData';

class TitleIntro extends Component {
  state = {
    TextData: {textData},
  }
  
  render () {
    return (
      <div className='Title'>
        <div className="ui__yellow__line" />
        <h1>WELCOME BACK</h1>
        <div className="ui__yellow__line" />
      </div>
    )
  }
}

export default TitleIntro
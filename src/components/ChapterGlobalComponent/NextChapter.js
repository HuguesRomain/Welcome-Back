import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NextChapter extends Component {
  render () {
    return (
      <Link to={`/${this.props.next}`}>
      <div className='NextChapter'>
        Next Chapter
      </div>
      </Link>
    )
  }
}

export default NextChapter
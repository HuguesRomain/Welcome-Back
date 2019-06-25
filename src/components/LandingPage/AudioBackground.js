import React, { Component, Fragment } from 'react'
import Sound from 'react-sound'
import ReactWaves from '@dschoon/react-waves';
import theEnd from '../../assets/video/theEnd.mp3'

class Audio extends Component {

  state = {
    playing: true
  };

  render () {
    
 
      return (
        <Fragment>
        <div className="playButton" onClick={() => { this.setState({ playing: !this.state.playing }) }}>
          { !this.state.playing ? '▶' : '■' }
        </div>
        <div className='containerAudio'>
        
        <ReactWaves
          audioFile={theEnd}
          className={'react-waves'}
          options={{
            barHeight: 2,
            cursorWidth: 0,
            height: 200,
            hideScrollbar: true,
            progressColor: '#F8EF48',
            responsive: true,
            waveColor: '#D1D6DA',
            loop: true,
            
          }}
          volume={1}
          zoom={1}
          playing={this.state.playing}
        />
      </div>
      </Fragment>
        
      );
  }
}


export default Audio
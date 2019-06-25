import React, { Component } from 'react'

import ReactWaves from '@dschoon/react-waves';
import theEnd from '../../assets/video/theEnd.mp3'

class AudioTrack extends Component {
  state = {
    playing: false
  };
  render () {
    return (
        <div className='containerAudio__track'>
        <div className="playButton__track" onClick={() => { this.setState({ playing: !this.state.playing }) }}>
          { !this.state.playing ? '▶' : '||' }
        </div>
        <ReactWaves
          audioFile={theEnd}
          className={'react-waves'}
          options={{
            barHeight: 2,
            cursorWidth: 0,
            height: 50,
            hideScrollbar: true,
            progressColor: '#F8EF48',
            responsive: true,
            
          }}
          volume={1}
          zoom={1}
          playing={this.state.playing}
        />
      </div>


    )
  }
}

export default AudioTrack
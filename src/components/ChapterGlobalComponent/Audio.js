import React, { Component } from 'react'

import ReactWaves from '@dschoon/react-waves';
import MusgraveLight from '../../assets/video/MusgraveLight.mp3'

class AudioTrack extends Component {
  state = {
    playing: false
  };
  render () {
    return (
        
        <div className='containerAudio__track'>
        <div className="playButton__track" onClick={() => { this.setState({ playing: !this.state.playing }) }}>
          { !this.state.playing ? <i class="far fa-play-circle"></i> : <i class="far fa-pause-circle"></i> }
        </div>
        <ReactWaves
          audioFile={MusgraveLight}
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
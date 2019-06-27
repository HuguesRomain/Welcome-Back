import React, { Component } from 'react'
import ReactWaves from '@dschoon/react-waves';
import AudioData from '../../data/AudioData';

class AudioTrack extends Component {
  state = {
    playing: false,
    AudioState: {AudioData},
  };
  render () {
    return (
        
        <div className='containerAudio__track'>
        <div className="playButton__track" onClick={() => { this.setState({ playing: !this.state.playing }) }}>
          { !this.state.playing ? <i className="far fa-play-circle"></i> : <i className="far fa-pause-circle"></i> }
        </div>
        <ReactWaves
          audioFile={this.props.audioLink}
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
import React, { Component } from 'react'
import textData from '../../data/ChapterData'
import imgData from '../../data/imgData'
import AudioTrack from '../ChapterGlobalComponent/Audio'
import AudioData from '../../data/AudioData'

class PersonalLife extends Component {
  state = {
    img: {imgData},
    AudioState: {AudioData},
  }
  render () {
    return (
      <div className='PersonalLife'>
        <h1>Depression, suicide and personal life</h1>
        <div className="traitLife" ref={ div => this.trace = div}></div>
        <div className='contentPersonalLife'>

          <div className='part__PersonalLife'>
            <div className='part__PersonalLife__Content'>
              <p>
                In the United States, <span className='yellow__span'>30% of suicides involve soldiers</span>. 
                Veterans of Vietnam  is the community most affected by suicide.
              </p>
              <p>
                Moreover, their personal lives are upset.
                <span className='yellow__span'>75% complain of marital and professional problems</span>.
              </p>
              <p>
                These veterans have a high rate of divorce, their partners are 
                prone to depression, and their children experience emotional problems and are more aggressiv than average.
              </p>
            </div>
          </div>
          <div className='part__PersonalLife__Image'>
          <img className='PersonalLife2' src={require(`../../assets/img/${this.state.img.imgData.Chapter2.PersonalLife2}`)} alt='logo' />
            <img className='PersonalLife1' src={require(`../../assets/img/${this.state.img.imgData.Chapter2.PersonalLife1}`)} alt='logo' />
            
          </div>

        </div>
        <AudioTrack audioLink={this.state.AudioState.AudioData.audio.chapter1Audio.audio1} />
        <p className="audioTrackSource__personalLife">Gordon Fletcher Howell’s Daughter, Vietnam veteran
Extract from “PTSD: A Vietnam Veteran’s Story ” by wgby</p>
      </div>
    )
  }
}

export default PersonalLife


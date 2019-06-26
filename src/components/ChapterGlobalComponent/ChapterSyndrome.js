import React, { Component } from 'react'
import imgData from '../../data/imgData'
import AudioTrack from '../ChapterGlobalComponent/Audio'
import AudioData from '../../data/AudioData'

class ChapterSyndrome extends Component {
  state = {
    img: {imgData},
    AudioState: {AudioData}
  }
  render () {
    return (
        <div className='ChapterSyndrome'>
        <h2>PTSD</h2>
        <div className='contentChapterSyndrome'>

          <div className='part__ChapterSyndrome'>

            <div className='part__ChapterSyndrome__Image'>
              <img className='Soldat1'src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Soldat2}`)} alt='logo' />
            </div>

            <div className='part__ChapterSyndrome__Content'>
                <p><span className='yellow__span'>Post traumatic stress disorder</span> is a mental disorder that can develop after a person is exposed to a traumatic event.</p><br></br>
                  <p>50% of veterans returned from Vietnam were diagnosed 
                    with PTSD. It is characterized by <span className='yellow__span'>depressive and suicidal symptoms, chronic pain, addictions,</span> heart and respiratory 
                    diseases, digestive disorders, diabetes, hostility
                     and aggressiveness. 
                  </p>
            <img className='Soldat3'src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Soldat3}`)} alt='logo' />
          </div>

          </div>
          

        </div>
        <AudioTrack audioLink={this.state.AudioState.AudioData.audio.chapter1Audio.audio2} />
      </div>
    )
  }
}

export default ChapterSyndrome
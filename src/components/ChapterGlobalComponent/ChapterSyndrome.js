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
              <img className='Soldats1'src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Soldats1}`)} alt='logo' />
              <img className='Soldats2'src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Soldats2}`)} alt='logo' />
            </div>

            <div className='part__ChapterSyndrome__Content'>
                <p><span className='yellow__span'>Post traumatic stress disorder</span> is a mental disorder that can develop after a person is exposed to a traumatic event.</p><br></br>
                  <p>50% of veterans returned from Vietnam were diagnosed 
                    with PTSD. It is characterized by <span className='yellow__span'>depressive and suicidal symptoms, chronic pain, addictions,</span> heart and respiratory 
                    diseases, digestive disorders, diabetes, hostility
                     and aggressiveness. 
                  </p>
            <img className='Soldats3'src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Soldats3}`)} alt='logo' />
          </div>

          </div>
          

        </div>
        <AudioTrack audioLink={this.state.AudioState.AudioData.audio.chapter1Audio.audio2} />
        
        <p className="audioTrackSource">Extract from “PTSD and Vietnam veteran”<br></br>
        Dan Gannon, Marine Corps veteran,
        </p>
      </div>
    )
  }
}

export default ChapterSyndrome
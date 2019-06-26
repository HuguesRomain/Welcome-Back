import React, { Component } from 'react'
import imgData from '../../data/imgData'
import AudioTrack from '../ChapterGlobalComponent/Audio'
import AudioData from '../../data/AudioData';

class EndChapter extends Component {

  state = {
    img: {imgData},
    AudioState: {AudioData},
  }
  render () {
    return (
        <div className='EndChapter'>
          <h2>WELCOME BACK</h2>
        <div className='contentEndChapter'>

          <div className='part__EndChapter'>
            <div className='part__EndChapter__Content'>
            <img className='Soldats1'src={require(`../../assets/img/${this.state.img.imgData.Chapter1.WelcomeBack}`)} alt='logo' />
            </div>
           
          </div>
          <div className='part__EndChapter__Image'>
                  <p> 
                    The return of the soldiers was difficult. Public opinion was unfavorable to the war, <span className='yellow__span'>the veterans were welcomed like criminals</span>, far from the "glorious generation". 
                  </p>
                  <p>
                  <span className='yellow__span'>The PTSD was not recognized</span> as a disease at the time, the government has very poorly supported his soldiers. Unemployment, drug addiction, poverty, health and psychological problems were the daily lives of the soldiers.
                  </p>
          </div>
        </div>
        <AudioTrack audioLink={this.state.AudioState.AudioData.audio.chapter1Audio.audio3}/>
      </div>
    )
  }
}

export default EndChapter
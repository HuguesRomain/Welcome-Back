import React, { Component } from 'react'
import imgData from '../../data/imgData'
import AudioData from '../../data/AudioData'

class IntroChapter3 extends Component {
  state = {
    img: {imgData},
    AudioState: {AudioData}
  }
  render () {
    return (
      <div className='IntroChapter'>
        <h1>CHAPTER III</h1>
        <p className='quote2__chapter3__part1'>
          “ My friends and I truly believed that the sleepless nights and depression would go away. 

        </p>
        
        <br/><br/>

        <p className='quote2__chapter3__part2'>
          - Jim Murphy -
        </p>
        <div className='contentIntroChapter3'>

          <div className='part__introChapter3'>
            <div className='part__introChapter3__Content'>
              <h3 className='nameIntroChapter3'><span className='yellow__span'>JIM MURPHY</span></h3>
                <h4>US Air Force : 1969</h4>
                  <p>“I am also a member of the Veterans for Peace (VFP) and I am also a leader of the
                     Association for Reconciliation (which works with the International Movement for 
                     Reconciliation in Paris) an organization that helps me to lead the struggles 
                     anti-war that I must undertake.”  
                  </p>
                  <img className='Murphy1'src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Murphy1}`)} alt='logo' />
                  <p className="audioTrackSource">
                  Interview for 4ACG  <br /> <br />Jim Murphy </p>
            </div>
          </div>
          <div className='part__introChapter3__Image'>
            <img className='Murphy2'src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Murphy2}`)} alt='logo' />
            <img className='Murphy3'src={require(`../../assets/img/${this.state.img.imgData.Chapter3.Murphy3}`)} alt='logo' />
          </div>
          
        </div>
        <p className='quote2__chapter1__part1'>“We don't need parades, plaques and certificates, just respect and recognition”</p><br/><br/>
            <p className='quote2__chapter1__part2'>- Randy Fowler, Vietnam veteran -
            </p>
      </div>
    )
  }
}

export default IntroChapter3


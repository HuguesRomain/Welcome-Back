import React, { Component } from 'react'
import imgData from '../../data/imgData'

class PtsdMechanism extends Component {
  state = {
    img: {imgData},
  }
  render () {
    return (
      <div className='ptsdMechanism'>
        <h2>THE PTSD MECHANISM</h2>
        <div className='ptsdMechanism__contentBlock'>
          <div className='ptsdMechanism__content'>
            <div>
              <h3>Step 1</h3>
                <h4>WARTIME AROCITIES</h4>  
                  <p>Violation of internalize standards of behavior</p>
            </div>

            <div>
              <img className='Soldat4' src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Tank1}`)} alt='logo' />
            </div>

          </div>

          <div className='ptsdMechanism__content'>
            <div>
              <img className='Soldat4' src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Tank2}`)} alt='logo' />
            </div>
              <div>
                <h3>Step 2</h3>
                  <h4>GUILT</h4>  
                    <p>Failure to integrate amoral acts within personal schemas</p>
              </div>
          </div>
          <div className='ptsdMechanism__content'>
            <div>
              <h3>Step 3</h3>
                <h4>PTSD SYMPTOMS</h4>  
                  <p>Re-experiencing, Distress, Avoidance Hyperarousal</p>
            </div>

            <div>
              <img className='Soldat4' src={require(`../../assets/img/${this.state.img.imgData.Chapter1.Tank3}`)} alt='logo' />
            </div>
          </div>
          <div classNam='Step'>
                <h3>Step 2</h3>
                  <h4>GUILT</h4>  
                    <p>Failure to integrate amoral acts within personal schemas</p>
              </div>

              <div classNam='Step'>
                <h3>Step 2</h3>
                  <h4>GUILT</h4>  
                    <p>Failure to integrate amoral acts within personal schemas</p>
              </div>
        </div> 
      </div>
    )
  }
}

export default PtsdMechanism
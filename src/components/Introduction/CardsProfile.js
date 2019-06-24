import React, { Component } from 'react'
import ProfileData from '../../data/ProfileData';
import ProfileCard from './CardProfile';
import {Link} from 'react-router-dom'

class CardsProfile extends Component {
  state = {
    ProfileState: { ProfileData },
  }
  render () {
    const profileCard = Object.keys(this.state.ProfileState.ProfileData).map(key => <ProfileCard key={key} detailsProfile={this.state.ProfileState.ProfileData[key]}></ProfileCard>) 
    return (
      <div className='profile__cards'>
        { profileCard }
      </div>
    )
  }
}

export default CardsProfile
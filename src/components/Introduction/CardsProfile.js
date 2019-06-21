import React, { Component } from 'react'
import ProfileData from '/Users/hugues/Documents/Documents pro/Git Project/Welcome-Back/src/data/ProfileData.js';
import ProfileCard from './CardProfile';


class CardsProfile extends Component {
  state = {
    ProfileState: {ProfileData},
  }
  render () {
    const profileCard = Object.keys(this.state.ProfileState.ProfileData).map(key => <ProfileCard key={key} detailsProfile={this.state.ProfileState.ProfileData[key]}></ProfileCard>) 
    return (
      <div className='profile__cards'>
        {profileCard}
      </div>
    )
  }
}

export default CardsProfile
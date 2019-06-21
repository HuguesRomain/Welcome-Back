import React from 'react'

const ProfileCard = ({ detailsProfile }) => {
  return (
    <div style={{backgroundImage:`/Users/hugues/Documents/Documents pro/Git Project/Welcome-Back/src/assets/img/${detailsProfile.Img}`}} className='card__profile'>
      <p className='card__profile__name'>{detailsProfile.Name}</p>
      <img className='star' src={require(`../../assets/img/star.png`)} alt=""/>
    </div>
  )
}

export default ProfileCard
import React from 'react'
import css from './FriendListItem.module.css'
import PropTypes from 'prop-types'


function FriendListItem({avatar, name, isOnline}) {

  return (
    <li className={css.item}>
        <span className=  {isOnline ? css.isOnline : css.isOffline}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
  ) 
}
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
}


export default FriendListItem
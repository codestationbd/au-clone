import React from 'react'
import './Feed.css'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';

function Feed( ) {
  return (
    <div className="feed">
        <div className='feed__header'>

          <div className='feedHeader__left'>
            <MenuIcon style={{ color : '#9FA19F', cursor : 'pointer'}}/>
          </div>
          <div className='feedHeader__right'>
            <NotificationsNoneOutlinedIcon style={{ height : 25,width : 25 , marginRight : 15, color : '#9FA19F', cursor : 'pointer'}}/>
            <Avatar style={{ height : 30,width : 30, cursor : 'pointer' }} onClick= { ( ) => alert('show something' )}/>
          </div>

        </div>

        <div className='feed__body'>
            <h3>Feed Body</h3>
            <h3>Feed Body</h3>
             <h3>Feed Body</h3>
             <h3>Feed Body</h3>
             <h3>Feed Body</h3>
             <h3>Feed Body</h3>
             <h3>Feed Body</h3>
             <h3>Feed Body</h3>
             <h3>Feed Body</h3>
             <h3>Feed Body</h3>
        </div>
    </div>
  )
}

export default Feed
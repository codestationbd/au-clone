import React from 'react'
import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DiamondIcon from '@mui/icons-material/Diamond';

function Sidebar( ) {
  return (
    <div className="sidebar">
      <div className='sidebar__top'>
          <img src='https://www.bkacontent.com/wp-content/uploads/2020/10/Depositphotos_336730000_l-2015.jpg'/>
          <h1>My Asian</h1>
      </div>
      <div className='sidebar__body'>
        <div className='sidebarBody__top'>
          <HomeOutlinedIcon style={{ color : 'white'}}/>
          <h3>Dashboard</h3>
        </div>

        <div className='sidebarBody__options'>

          <div className='sidebarBody__option'>
              <h3>Setup Information</h3>
              <div className='sidebarBodyOption__singleItem'>
                <DiamondIcon/>
                <h5>Academic and Finance Setup</h5>
              </div>
          </div>

        <h3>Sidebar</h3>
        <h3>Sidebar</h3>
        <h3>Sidebar</h3>
        <h3>Sidebar</h3>
        <h3>Sidebar</h3>
        <h3>Sidebar</h3>
        <h3>Sidebar</h3>

        </div>
      
      </div>
        
    </div>
  )
}

export default Sidebar
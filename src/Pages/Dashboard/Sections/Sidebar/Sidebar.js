import React, { useState } from 'react'
import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import DiamondIcon from '@mui/icons-material/Diamond';
import AddIcon from '@mui/icons-material/Add';
import { useSidebar } from 'context/SidebarContext';

function Sidebar( ) {
  const { sidebarIsCollapsed , plusButtonIsVisible , minusButtonIsVisible , handlePlusButton , handleMinusButton } = useSidebar( )
  return (
    <div className={ !sidebarIsCollapsed ? 'sidebar' : 'sidebar__collapsed'}>
      <div className='sidebar__top'>
          <img src=''/>
          <h1>My Asian</h1>
      </div>
      <div className='sidebar__body'>
        <div className='sidebarBody__top'>
          <HomeOutlinedIcon style={{ color : 'white'}}/>
          <h3>Dashboard</h3>
        </div>

        <div className='sidebarBody__options'>

          <div className='sidebarBody__option1'>
              <h3 style={{ fontFamily : 'nunito' , fontSize : 13 , fontWeight : 200 , marginBotom : 10 , color : 'gray' }}>Setup Information</h3>
              <div className='sidebarBodyOption__singleItem1'>
                <DiamondIcon style={{ color : 'gray'}}/>
                <h5 style={{ fontSize : 17,fontWeight : 300, fontFamily : 'nunito' , marginLeft : 8 , color : 'gray'}}>Academic and Finance Setup</h5>
                { plusButtonIsVisible ?  <AddIcon style={{ marginLeft : 'auto' , marginRight : 5 , color : 'gray'}}  onClick={( ) => handlePlusButton( )}/> :  <RemoveIcon style={{ marginLeft : 'auto' , marginRight : 5 , color : 'gray'}} onClick={ ( ) => handleMinusButton( )} />}
               
              </div>
          </div>


          <div className='sidebarBody__option'>
              <h3>Academic Activities</h3>
              <div className='sidebarBodyOption__singleItemOptions'>
                      <div className='sidebarBodyOption__singleItem'>
                          <DiamondIcon style={{ color : 'gray'}}/>
                          <h5 style={{ fontSize : 17,fontWeight : 300, fontFamily : 'nunito' , marginLeft : 8 , color : 'gray'}}>Academic</h5>
                          { plusButtonIsVisible ?  <AddIcon style={{ marginLeft : 'auto' , marginRight : 5 , color : 'gray'}}  onClick={( ) => handlePlusButton( )}/> :  <RemoveIcon style={{ marginLeft : 'auto' , marginRight : 5 , color : 'gray'}} onClick={ ( ) => handleMinusButton( )} />}
                        </div>

                        <div className='sidebarBodyOption__singleItem'>
                          <DiamondIcon style={{ color : 'gray'}}/>
                          <h5 style={{ fontSize : 17,fontWeight : 300, fontFamily : 'nunito' , marginLeft : 8 , color : 'gray'}}>Examination</h5>
                          { plusButtonIsVisible ?  <AddIcon style={{ marginLeft : 'auto' , marginRight : 5 , color : 'gray'}}  onClick={( ) => handlePlusButton( )}/> :  <RemoveIcon style={{ marginLeft : 'auto' , marginRight : 5 , color : 'gray'}} onClick={ ( ) => handleMinusButton( )} />}
                        </div>


              </div>
              
          </div>



          <div className='sidebarBody__option1'>
              <h3 style={{ fontFamily : 'nunito' , fontSize : 13 , fontWeight : 200 , marginBotom : 10 , color : 'gray' }}>Student Finance</h3>
              <div className='sidebarBodyOption__singleItem1'>
                <DiamondIcon style={{ color : 'gray'}}/>
                <h5 style={{ fontSize : 17,fontWeight : 300, fontFamily : 'nunito' , marginLeft : 8 , color : 'gray'}}>Financial Information</h5>
                <AddIcon style={{ marginLeft : 'auto' , marginRight : 5 , color : 'gray'}}/>
              </div>
          </div>

        </div>
      
      </div>
        
    </div>
  )
}

export default Sidebar
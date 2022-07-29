import React from 'react'
import './Header.css'

function Header( ) {
  return (
    <div className="header">
        <div className="header__left">
                <img src='https://images.livemint.com/img/2022/02/26/1140x641/The-Worst-Person-in-the-World_1645849348768_1645849366108.jpg/'/>
                <h3>My Asian</h3>
        </div>
        <div className="header__right">
            <div className="headerRight__options">
                <h3>Icon</h3>
                <h3>Avattar</h3>
            </div>
                
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import Feed from '../Feed/Feed'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import "./Dashboard.css"

function Dashboard( ) {
  return (
    <div className="dashboard">
        <Sidebar/>
        <Feed/>
    </div>
  )
}

export default Dashboard
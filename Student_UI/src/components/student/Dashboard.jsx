import React from 'react'
import STYLE from "./dashboard.module.css"
import StudentAside from './StudentAside'


const Dashboard = () => {
  return (
    <div className={STYLE.dashboard}> 
        <StudentAside/>

    </div>
  )
}

export default Dashboard
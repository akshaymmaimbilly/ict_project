import React from 'react'
import "./home.scss"
import Sidebar from '../../comp/sidebar/Sidebar'
import Navbar from '../../comp/navbar/Navbar'
import Widget from '../../comp/widgets/Widget'
import Chart from '../../comp/chart/Chart'

const Home = () => {
  return (
    <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
              <Navbar/>
         <div className="widgets">
          <Widget type="user"/>
          <Widget type="books"/>
          <Widget type="rented"/>
          <Widget type="authors"/>
         </div>
         <div className="charts">
          <Chart/>

         </div>
</div>
        </div>
  )
}

export default Home
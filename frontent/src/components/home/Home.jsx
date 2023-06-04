import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./home.scss";
import Sidebar from '../../comp/sidebar/Sidebar';
import Navbar from '../../comp/navbar/Navbar';
import Widget from '../../comp/widgets/Widget';
import Chart from '../../comp/chart/Chart';

const Home = () => {
  const [bookCount, setBookCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const bookCountResponse = await axios.get('http://localhost:8080/viewbooks');
      const userCountResponse = await axios.get('http://localhost:8080/viewusers');

      setBookCount(bookCountResponse.data.length);
      setUserCount(userCountResponse.data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" count={userCount} />
          <Widget type="books" count={bookCount} />
          <Widget type="rented" />
          <Widget type="authors" />
        </div>
        <div className="charts">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Home;

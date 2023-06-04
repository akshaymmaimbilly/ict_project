import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AttributionIcon from '@mui/icons-material/Attribution';
import axios from 'axios';

const Widget = ({ type }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/count/${type}`);
      setCount(response.data.count);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  let data;

  switch (type) {
    case "user":
      
      data = {
        title: "USERS",
        icon: (
          <PersonOutlinedIcon
            className="icons"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "books":
      
      data = {
        title: "BOOKS",
        icon: (
          <LibraryBooksIcon
            className="icons"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "rented":
      data = {
        title: "RENTED",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icons"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "authors":
      data = {
        
        title: "Authors",
        icon: (
          <AttributionIcon
            className="icons"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{count}</span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;

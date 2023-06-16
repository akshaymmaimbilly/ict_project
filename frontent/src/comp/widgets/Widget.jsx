import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AttributionIcon from "@mui/icons-material/Attribution";

import CloseIcon from "@mui/icons-material/Close";


import axios from "axios";
import { useState } from "react";
import { Modal } from "@mui/material";
import Author from "../../components/Author";

const Widget = ({ type }) => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/viewusers");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  fetchUsers();

  let data;
  let handleClick;

  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: "See all users",
        amount: users.length,
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
      handleClick = () => {
        console.log("User link clicked!");
        window.location.href = "/user";
      };
      break;
    case "books":
      data = {
        title: "BOOKS",
        link: "View all Books",
        amount: "1",
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
      handleClick = () => {
        console.log("Books link clicked!");
        window.location.href = "/viewbooks";
      };
      break;
    case "rented":
      data = {
        title: "RENTED",
        link: "View Rented Books",
        amount: "1",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icons"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      handleClick = () => {
        console.log("Rented link clicked!");
      };
      break;
    case "authors":
      data = {
        title: "Authors",
        link: "View Authors",
        amount: "1",
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
      handleClick = () => {
        handleOpenModal();
        console.log("Authors link clicked!");
      };
      break;
    default:
      break;
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.amount}</span>
        <span
          className="link"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          {data.link}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>

      <div>

      <Modal open={isOpen} onClose={handleCloseModal}>
        <Author/>
      </Modal>
      </div>
    </div>
  );
};

export default Widget;

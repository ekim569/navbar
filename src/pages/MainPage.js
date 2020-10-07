import React from "react";
import "../App.css";
// import logo from "../logo.svg";
// import logo from './logo.svg';
// import TutorLogin from "./components/TutorLogin";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

const MainPage = ({ nav }) => {
  return (
    <React.Fragment>
      <Navbar />
      <body>
        <Home />
      </body>
    </React.Fragment>
  );
};

export default MainPage;

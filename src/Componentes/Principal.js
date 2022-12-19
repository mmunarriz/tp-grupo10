import React from "react";
import "../App.css";
import Banner from "./Banner";
import NavBarNet from "./NavBarNet";
import TopRated from "./TopRated";
import { useAuth } from "../context/authContext";

function Principal() {
  const { user } = useAuth();
  console.log(user)
  return (
    <div className="App">
      <NavBarNet />
      <Banner />
      <TopRated />
    </div>
  );
}

export default Principal;

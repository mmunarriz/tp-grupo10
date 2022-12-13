import React from "react";
import "../App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import TopRated from "./TopRated";
import { useAuth } from "../context/authContext";

function Principal() {
  const { user } = useAuth();
  console.log(user)
  return (
    <div className="App">
      <Nav />
      <Banner />
      <TopRated />
    </div>
  );
}

export default Principal;

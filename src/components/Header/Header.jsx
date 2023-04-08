import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Active from "../Active/Active";

const Header = () => {
   return (
      <nav>
         <Active to="/">Home</Active>
         <Active to="/about">About</Active>
         <Active to="/friends">Friends</Active>
         <Active to="/contacts">Contacts</Active>
         <Active to="/Posts">Posts</Active>
         <Active to="/photos">Photos</Active>
      </nav>
   );
};

export default Header;

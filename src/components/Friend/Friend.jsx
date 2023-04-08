import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
   //    console.log(friend);
   const { name, email, phone, id } = friend;
   //    console.log(name);
   return (
      <div className="frnd-card">
         <h1>{name}</h1>
         <p> Email: {email}</p>
         <p>Phone: {phone} </p>

         <p>
            <Link to={`/friend/${id}`}>Details</Link>
         </p>
      </div>
   );
};

export default Friend;

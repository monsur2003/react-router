import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
import "./Friends.css";

const Friends = () => {
   const friends = useLoaderData();

   return (
      <div>
         <h3>My friends list is here {friends.length}</h3>
         <div className="frnds">
            {friends.map((friend) => (
               <Friend friend={friend} key={friend.id}></Friend>
            ))}
         </div>
      </div>
   );
};

export default Friends;

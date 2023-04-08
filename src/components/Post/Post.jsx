import React from "react";
import "./Post.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
   const { id, title } = post;
   const navigate = useNavigate();
   const handle = () => {
      navigate(`/post/${id}`);
   };
   const backhandle = () => {
      navigate(-1);
   };
   return (
      <div className="post">
         <h1>Id {id}</h1>
         <h4>Title: {title}</h4>
         <Link to={`/post/${id}`}>
            <button>show details</button>
         </Link>
         <button onClick={handle}>details</button>
         <button onClick={backhandle}>GO Back</button>
      </div>
   );
};

export default Post;

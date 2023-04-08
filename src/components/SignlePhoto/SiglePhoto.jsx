import React from "react";
import Photos from "../Photos/Photos";
import "./Singlephoto.css";
import { useNavigate } from "react-router-dom";

const SiglePhoto = ({ photo }) => {
   console.log(photo);
   const { title, url, id } = photo;
   const navigate = useNavigate();
   const handleDetail = () => {
      navigate(`/photo/${id}`);
   };

   return (
      <div className="container">
         <h4>id: {id}</h4>
         <h5> title: {title}</h5>
         <div className="img">
            <img src={url} alt="" />
         </div>
         <button onClick={handleDetail}>Show main url</button>
      </div>
   );
};

export default SiglePhoto;

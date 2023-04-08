import React from "react";
import { useLoaderData } from "react-router-dom";
import SiglePhoto from "../SignlePhoto/SiglePhoto";
import "./Photos.css";

const Photos = () => {
   const photos = useLoaderData();
   console.log(photos);
   return (
      <div>
         <h2>All photos is here {photos.length}</h2>
         <div className="continer">
            {photos.slice(0, 50).map((photo) => (
               <SiglePhoto key={photo.id} photo={photo}></SiglePhoto>
            ))}
         </div>
      </div>
   );
};

export default Photos;

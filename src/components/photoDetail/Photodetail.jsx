import React from "react";
import { useLoaderData } from "react-router-dom";

const Photodetail = () => {
   const detail = useLoaderData();
   console.log(detail);
   const { thumbnailUrl } = detail;
   return (
      <div>
         <h3>All photo is Here</h3>
         <img src={thumbnailUrl} alt="" />
      </div>
   );
};

export default Photodetail;

import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Detail = () => {
   const detail = useLoaderData();
   console.log(detail);
   const navigate = useNavigate();
   const handleBack = () => {
      navigate(-1);
   };
   return (
      <div>
         <h1>Here is all of detail for every friend</h1>
         <h2>name: {detail.name}</h2>
         <p>Phone : {detail.phone}</p>
         <button onClick={handleBack}>Go back</button>
      </div>
   );
};

export default Detail;

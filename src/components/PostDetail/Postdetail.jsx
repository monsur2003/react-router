import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Postdetail = () => {
   const postbody = useLoaderData();
   console.log(postbody);
   const { title, body, id } = postbody;
   const navigate = useNavigate();
   const backhandle = () => {
      navigate(-1);
   };
   return (
      <div>
         <h2>Detail about post: {id}</h2>
         <div>
            <h2>
               <small>post: {body} </small>
            </h2>
            <button onClick={backhandle}>Back</button>
         </div>
      </div>
   );
};

export default Postdetail;

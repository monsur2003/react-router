import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import First from "./components/First/First";
import Friends from "./components/Friends/Friends";
import Detail from "./components/Detail/Detail";
import Posts from "./components/Posts/Posts";
import Postdetail from "./components/PostDetail/Postdetail";
import Photos from "./components/Photos/Photos";
import Photodetail from "./components/photoDetail/Photodetail";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home></Home>,
      children: [
         {
            path: "/",
            element: <First></First>,
         },
         {
            path: "friends",
            element: <Friends></Friends>,
            loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
         },
         {
            path: "/friend/:friendId",
            element: <Detail></Detail>,
            loader: ({ params }) =>
               fetch(
                  `https://jsonplaceholder.typicode.com/users/${params.friendId}`
               ),
         },
         {
            path: "about",
            element: <About></About>,
         },
         {
            path: "photos",
            element: <Photos></Photos>,
            loader: () => fetch("https://jsonplaceholder.typicode.com/photos"),
         },
         {
            path: "/photo/:photoId",
            element: <Photodetail></Photodetail>,
            loader: ({ params }) =>
               fetch(
                  `https://jsonplaceholder.typicode.com/photos/${params.photoId}`
               ),
         },
         {
            path: "posts",
            element: <Posts></Posts>,
            loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
         },
         {
            path: "/post/:postId",
            element: <Postdetail></Postdetail>,
            loader: ({ params }) =>
               fetch(
                  `https://jsonplaceholder.typicode.com/posts/${params.postId}`
               ),
         },
         {
            path: "contacts",
            element: <Contacts></Contacts>,
         },
         {
            path: "*",
            element: <div>404 not found</div>,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>
);

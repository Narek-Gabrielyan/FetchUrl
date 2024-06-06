// **** Installed libraries **** //
import React from "react";
import { Routes, Route } from "react-router-dom";
// **** JSX **** //
import Layout from "./Components/Layout/Layout";
// **** Pages **** //
import Albums from "./Components/Pages/Albums/Albums.jsx";
import Comments from "./Components/Pages/Comments/Comments.jsx";
import Photos from "./Components/Pages/Photos/Photos.jsx";
import Posts from "./Components/Pages/Posts/Posts.jsx";
import Todos from "./Components/Pages/Todos/Todos.jsx";
import UsersPage from "./Components/Pages/UsersPage/UsersPage.jsx";
// **** Dynamic parameters function **** //
import { Posts_Element } from "./Components/Dynamic_Parameters/Posts_Element/Posts_Element.jsx";
import { Users_Element } from "./Components/Dynamic_Parameters/Users_Element/Users_Element.jsx";
import { Comments_Element } from "./Components/Dynamic_Parameters/Comments_Element/Comments_Element.jsx";
// **** CSS **** //
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="container_item">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<UsersPage />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={"not found"} />
            {/* Dynamic Parameters */}
            <Route path="/posts/:id" element={<Posts_Element />} />
            <Route path="/:id" element={<Users_Element />} />
            <Route path="/comments/:id" element={<Comments_Element />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

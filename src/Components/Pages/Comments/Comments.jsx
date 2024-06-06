// **** Installed libraries **** //
import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// **** API **** //
import { instance } from "../../../API/API";
// **** Component **** //
// import { Tag_Span } from "../../Tag_Span/Tag_Span";
import { Comments_Components } from "../../Comments_Component/Comments_Components";
// **** CSS **** //
import cssComments from "./Comments.module.css";

export default function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    instance
      .get("/comments")
      .then((res) => setComments(res.data))
      .catch((err) => console.error(err));
  }, []);

  return comments.map((com) => (
    <NavLink to={`${com.id}`} key={"comments".concat(com.id)} className={cssComments.link}>
      <Comments_Components com={com} />
      {/* <div className={cssComments.container}>
        <div className={cssComments.first}>
          <Tag_Span keys="name" values={com.name} />
          <Tag_Span keys="id" values={com.id} />
        </div>
        <div className={cssComments.first}>
          <Tag_Span keys="email" values={com.email} />
          <Tag_Span keys="postId" values={com.postId} />
        </div>
        <Tag_Span keys="body" values={com.body} />
      </div> */}
    </NavLink>
  ));
}

//
// </NavLink>

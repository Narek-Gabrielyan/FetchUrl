// **** Installed libraries **** //
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// **** Relative hook **** //
import useRequest from "../../../Relative_Hook/RelativeHook";
// **** Component **** //
import { Tag_Span } from "../../Tag_Span/Tag_Span";
// **** CSS **** //
import cssPost_item from "./Posts_Element.module.css";

export const Posts_Element = function () {
  const { id } = useParams();
  const posts = useRequest(`posts/${id}`);
  const nav = useNavigate();
  const back = () => nav(-1);

  return (
    posts && (
      <div className={cssPost_item.box}>
        <div className={cssPost_item.box_item}>
          <Tag_Span keys="title" values={posts.title} />
          <div className={cssPost_item.box_item_2}>
            <Tag_Span keys="userId" values={posts.userId} />        
            <Tag_Span keys="id" values={posts.id} />
          </div>
        </div>
        <Tag_Span keys="body" values={posts.body} />
        <div style={{ textAlign: "center" }}>
          <button className={cssPost_item.click} onClick={back}>
            Go Back
          </button>
        </div>
      </div>
    )
  );
};
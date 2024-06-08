// **** Installed libraries **** //
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// **** API **** //
import { instance } from "../../../API/API";
// **** Component **** //
import { Comments_Components } from "../../Comments_Component/Comments_Components";
// **** CSS **** //
import cssComm_item from "./Comments_Element.module.css";

export const Comments_Element = function () {
  const [comments, setComments] = useState([]);

  const { id } = useParams();
  const nav = useNavigate();
  const back = () => nav(-1);

  useEffect(() => {
    instance.get(`/comments/${id}`).then((res) => setComments(res.data));
  }, []);

    const remove = (id) => {
      instance
        .delete(`/comments/${id}`)
        .then((res) => console.log(res.status, res.data));
    };
  
  return (
    <div className={cssComm_item.element}>
      <Comments_Components com={comments} />
      <div className={cssComm_item.last_Box}>
        <button onClick={back}>Back</button>
        <button onClick={() => remove(id)}>Remove</button>
      </div>
    </div>
  );
};




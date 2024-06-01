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
  const dynamic_url = useRequest("posts");
  const { id } = useParams();
  const product = dynamic_url.find((product) => product.id === +id);
  const nav = useNavigate();
  const back = () => nav(-1);

  return (
    product && (
      <div className={cssPost_item.box}>
        <div className={cssPost_item.box_item}>
          <Tag_Span
            keys={Object.keys(product)[2]}
            values={Object.values(product)[2]}
          />
          <div className={cssPost_item.box_item_2}>
            <Tag_Span
              keys={Object.keys(product)[0]}
              values={Object.values(product)[0]}
            />
            <Tag_Span
              keys={Object.keys(product)[1]}
              values={Object.values(product)[1]}
            />
          </div>
        </div>
        <Tag_Span
          keys={Object.keys(product)[3]}
          values={Object.values(product)[3]}
        />
        <div style={{textAlign: "center"}}>
          <button className={cssPost_item.click} onClick={back}>
            Go Back
          </button>
        </div>
      </div>
    )
  );
};

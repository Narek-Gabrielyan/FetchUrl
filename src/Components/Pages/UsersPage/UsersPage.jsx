// // **** Installed libraries **** //
import React from "react";
import { NavLink } from "react-router-dom";
// **** Relative hook **** //
import useRequest from "../../../Relative_Hook/RelativeHook";
// **** Component **** //
import { Tag_Span } from "../../Tag_Span/Tag_Span";
// **** CSS **** //
import cssUsers from "./UsersPage.module.css";

export default function UsersPage() {
  const users = useRequest("users");

  
  return (
    users &&
    users.map((user) => (
      <NavLink
        to={`${users.id}`}
        className={cssUsers.box}
        key={"posts" + user.id}
      >
        <div className={cssUsers.box_item_1}>
          <Tag_Span
            keys={Object.keys(user)[1]}
            values={Object.values(user)[1]}
          />
          <Tag_Span
            keys={Object.keys(user)[2]}
            values={Object.values(user)[2]}
          />
          <Tag_Span
            keys={Object.keys(user)[3]}
            values={Object.values(user)[3]}
          />
        </div>

        <div className={cssUsers.box_item_1}>
          <Tag_Span
            keys={Object.keys(user)[5]}
            values={Object.values(user)[5]}
          />
          <Tag_Span
            keys={Object.keys(user)[6]}
            values={Object.values(user)[6]}
          />
        </div>
        <hr className={cssUsers.hr} />
        <div className={cssUsers.box_item_1}>
          <h4> {Object.keys(user)[4].toUpperCase()} </h4>
          <Tag_Span
            keys={Object.keys(user.address)[0]}
            values={Object.values(user.address)[0]}
          />
          <Tag_Span
            keys={Object.keys(user.address)[1]}
            values={Object.values(user.address)[1]}
          />
          <Tag_Span
            keys={Object.keys(user.address)[2]}
            values={Object.values(user.address)[2]}
          />
          <Tag_Span
            keys={Object.keys(user.address)[3]}
            values={Object.values(user.address)[3]}
          />
        </div>
        <hr className={cssUsers.hr} />
        <div
          className={cssUsers.box_item_1}
          style={{ justifyContent: "space-around" }}
        >
          <h4>{Object.keys(user.address).at(-1)}</h4>
          <Tag_Span
            keys={Object.keys(user.address.geo).at()}
            values={Object.values(user.address.geo).at()}
          />
          <Tag_Span
            keys={Object.keys(user.address.geo).at(-1)}
            values={Object.values(user.address.geo).at(-1)}
          />
        </div>
        <hr className={cssUsers.hr} />
        <div className={cssUsers.box_item_1}>
          <h4> {Object.keys(user).slice(-1)} </h4>
          <Tag_Span
            keys={Object.keys(user.company).at()}
            values={Object.values(user.company).at()}
          />
          <Tag_Span
            keys={Object.keys(user.company).at(1)}
            values={Object.values(user.company).at(1)}
          />
          <Tag_Span
            keys={Object.keys(user.company).at(2)}
            values={Object.values(user.company).at(2)}
          />
        </div>
      </NavLink>
    ))
  );
}

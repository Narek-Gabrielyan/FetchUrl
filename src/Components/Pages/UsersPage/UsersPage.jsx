// // **** Installed libraries **** //
import React from "react";
import { NavLink } from "react-router-dom";
// **** Relative hook **** //
import useRequest from "../../../Relative_Hook/RelativeHook";
// **** Component **** //
import { Tag_Span } from "../../Tag_Span/Tag_Span";
// **** CSS **** //
import cssUsers from "./UsersPage.module.css";

export const UsersPage_Components = function ({user}) {
  return (
    <>
      <div className={cssUsers.box_item_1}>
        <Tag_Span keys="name" values={user.name} />
        <Tag_Span keys="username" values={user.username} />
        <Tag_Span keys="email" values={user.email} />
      </div>
      <div className={cssUsers.box_item_1}>
        <Tag_Span keys="phone" values={user.phone} />
        <Tag_Span keys="website" values={user.website} />
      </div>
      <hr className={cssUsers.hr} />
      <div className={cssUsers.box_item_1}>
        <h4> {"address".toUpperCase()} </h4>
        <Tag_Span keys="street" values={user.address.street} />
        <Tag_Span keys="suite" values={user.address.suite} />
        <Tag_Span keys="city" values={user.address.city} />
        <Tag_Span keys="zipcode" values={user.address.zipcode} />
      </div>
      <hr className={cssUsers.hr} />
      <div
        className={cssUsers.box_item_1}
        style={{ justifyContent: "space-around" }}
      >
        <h4>{"Geo"}</h4>
        <Tag_Span keys="lat" values={user.address.geo.lat} />
        <Tag_Span keys="lng" values={user.address.geo.lng} />
      </div>
      <hr className={cssUsers.hr} />
      <div className={cssUsers.box_item_1}>
        <h4> {"Company"} </h4>
        <Tag_Span keys="name" values={user.company.name} />
        <Tag_Span keys="catchPhrase" values={user.company.catchPhrase} />
        <Tag_Span keys="bs" values={user.company.bs} />
      </div>
    </>
  );
}

export default function UsersPage() {
  const users = useRequest("users");

  return (
    users &&
    users.map((user) => (
      <NavLink
        to={`${user.id}`}
        className={cssUsers.box}
        key={"users" + user.id}
      >
        <UsersPage_Components user={user} />
      </NavLink>
    ))
  );
}
// // **** Installed libraries **** //
import React from "react";
import { NavLink } from "react-router-dom";
// **** Relative hook **** //
import useRequest from "../../../Relative_Hook/RelativeHook";
// **** Component **** //
import { Tag_Span } from "../../Tag_Span/Tag_Span";
// **** CSS **** //
import cssUsers from "./UsersPage.module.css";

export const UsersPage_Components = function ({ users, address, company }) {

  const geo = address?.geo;

  return (
    <>
      <div className={cssUsers.box_item_1}>
        <Tag_Span keys="name" values={users?.name} />
        <Tag_Span keys="username" values={users?.username} />
        <Tag_Span keys="email" values={users?.email} />
      </div>
      <div className={cssUsers.box_item_1}>
        <Tag_Span keys="phone" values={users?.phone} />
        <Tag_Span keys="website" values={users?.website} />
      </div>
      <hr className={cssUsers.hr} />
      <div className={cssUsers.box_item_1}>
        <h4> {"address".toUpperCase()} </h4>
        <Tag_Span keys="street" values={address?.street} />
        <Tag_Span keys="suite" values={address?.suite} />
          <Tag_Span keys="city" values={address?.city} />
          <Tag_Span keys="zipcode" values={address?.zipcode} />
      </div>
      <hr className={cssUsers.hr} />
      <div
        className={cssUsers.box_item_1}
        style={{ justifyContent: "space-around" }}
      >
        <h4>{"Geo"}</h4>
        <Tag_Span keys="lat" values={geo?.lat} />
        <Tag_Span keys="lng" values={geo?.lng} />
      </div>
      <hr className={cssUsers.hr} />
      <div className={cssUsers.box_item_1}>
        <h4> {"Company"} </h4>
        <Tag_Span keys="name" values={company?.name} />
        <Tag_Span keys="catchPhrase" values={company?.catchPhrase} />
          <Tag_Span keys="bs" values={company?.bs} />
      </div>
    </>
  );
};

export default function UsersPage() {
  const users = useRequest("users");

  return (
    users &&
    users.map((users) => (
      <NavLink
        to={`${users.id}`}
        className={cssUsers.box}
        key={"users" + users.id}
      >
        <UsersPage_Components users={users} address={users.address} company={users.company} />
      </NavLink>
    ))
  );
}

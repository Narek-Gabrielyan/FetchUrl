// **** Installed libraries **** //
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// **** API **** //
import { instance } from "../../../API/API";
// **** Component **** //
import { UsersPage_Components } from "../../Pages/UsersPage/UsersPage";
// **** CSS **** //
import cssUs_Elem from "./Users_Element.module.css"

export const Users_Element = function () {
    const [users, setUsers] = useState([])
    const {id } = useParams()

    useEffect(() => {
        instance.get(`/users/${id}`).then((res) => setUsers(res.data)).catch((err) => console.error(err))
    }, [])
    
  return (
    <div className={cssUs_Elem.container}>
      <UsersPage_Components
        users={users}
        address={users.address}
        company={users.company}
      />
    </div>
  );
};

// **** Installed libraries **** //
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// **** API **** //
import { instance } from "../../../API/API";
// **** Component **** //
import { UsersPage_Components } from "../../Pages/UsersPage/UsersPage";

export const Users_Element = function () {
    const [users, setUsers] = useState([])
    const {id } = useParams()

    useEffect(() => {
        instance.get(`/users/${id}`).then((res) => setUsers(res.data)).catch((err) => console.error(err))
    }, [])

    console.log(users)
    
    return (
      <UsersPage_Components user={users} />
  )
};

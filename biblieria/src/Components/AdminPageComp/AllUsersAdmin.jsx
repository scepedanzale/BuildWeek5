import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { UsersList } from "../UsersList";

export default function AllUsersAdmin() {
  const [users, setUsers] = useState();

  const getAllUsers = () => {
    axios("/admin/user").then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return <>{users && <UsersList users={users} getAllUsers={getAllUsers}/>}</>;
}

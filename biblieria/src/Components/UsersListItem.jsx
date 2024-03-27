import {
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { Button } from "react-bootstrap";
import axios from "../api/axios";
import { useState } from "react";

export function UsersListItem({ user, getAllUsers }) {
  const [loading, setLoading] = useState(false);

  const deleteUser = (id) => {
    setLoading(true);
    axios
      .delete("/admin/user/" + id)
      .then(() => getAllUsers())
      
  };

  return (
    <ListItem className="flex justify-between">
      <div className="flex">
        <ListItemPrefix>
          <Avatar variant="circular" alt={user.name} src={user.profile_img} />
        </ListItemPrefix>
        <div>
          <Typography variant="h6" color="blue-gray">
            {user.name}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {user.email}
          </Typography>
        </div>
      </div>
      <Button
        disabled={loading}
        className="btn btn-danger"
        onClick={() => {
          window.confirm(`Are you sure you want to delete ${user.name} from users?`)
          deleteUser(user.id)}}
      >
        {!loading ? "X" : "o"}
      </Button>
    </ListItem>
  );
}

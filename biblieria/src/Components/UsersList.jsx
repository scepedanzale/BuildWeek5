import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
  import {UsersListItem} from './UsersListItem';
  import useAuthContext from "../context/AuthContext";
   
  export function UsersList({users, getAllUsers}) {

    const {user} = useAuthContext();

    return (
      <Card className="w-96">
        <List>
          {users.filter(u => u.id !== user.id).map((user) => <UsersListItem key={user.id} user={user} getAllUsers={getAllUsers} />)}
        </List>
      </Card>
    );
  }
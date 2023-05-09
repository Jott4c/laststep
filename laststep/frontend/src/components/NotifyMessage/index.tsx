import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export default function SimpleBadge() {
  const { rooms } = useContext(UserContext);

  return (
    <Badge badgeContent={rooms.length} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}

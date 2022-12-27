import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./../../providers/UserContext";

export default function SimpleBadge() {
  /* const [countMsg, setCountMsg] = useState(newMessages?.length); */

  useEffect(() => {
    /*  setCountMsg(newMessages?.length); */
  }, []);

  return (
    <Badge badgeContent={1} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}

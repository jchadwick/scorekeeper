import {
  ListItem,
  ListItemProps,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { Player } from "../model";

export const PlayerListItem = ({
  player,
  ...props
}: ListItemProps & { player: Player }) => (
  <ListItem disablePadding {...props}>
    <ListItemButton>
      <ListItemAvatar>
        <Avatar alt={player.name} src={player.avatarUrl} />
      </ListItemAvatar>
      <ListItemText primary={player.name} />
    </ListItemButton>
  </ListItem>
);

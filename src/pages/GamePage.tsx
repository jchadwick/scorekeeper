import {
  Avatar,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { PageHeader } from "../components/PageHeader";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { loadGame } from "../services/gamesService";
import { Game, PlayerScore } from "../model";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

export const GamePage = () => {
  const params = useParams<{ gameId: string }>();
  const [game, setGame] = useState<Game | null>(null);

  const onAddPlayer = () => {
    console.log("TBD: add player");
  };

  useEffect(() => {
    // loadGame(params?.gameId!).then(setGame);
  }, [params.gameId]);

  if (!game) {
    return <Loading />;
  }

  return (
    <>
      <Stack direction="column" spacing={1}>
        <PageHeader>{game.name}</PageHeader>
        <List dense sx={{ width: "100%" }}>
          {game.scores.map((score) => (
            <GamePlayerListItem key={score.player.id} score={score} />
          ))}
        </List>
        <AddPlayerButton onClick={onAddPlayer} />
      </Stack>
    </>
  );
};

const AddPlayerButton = ({ onClick }: { onClick: () => void }) => (
  <Fab
    sx={{
      position: "absolute",
      bottom: 16,
      right: 16,
    }}
    aria-label="Add Player"
    color="primary"
    onClick={onClick}
  >
    <AddIcon />
  </Fab>
);

const GamePlayerListItem = ({
  score: { score, player },
}: {
  score: PlayerScore;
}) => (
  <ListItem key={player.id} disablePadding secondaryAction={<>{score}</>}>
    <ListItemButton>
      <ListItemAvatar>
        <Avatar alt={player.name} src={player.avatarUrl} />
      </ListItemAvatar>
      <ListItemText primary={player.name} />
    </ListItemButton>
  </ListItem>
);

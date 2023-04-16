import AddIcon from "@mui/icons-material/Add";
import { Fab, List, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
import { PlayerListItem } from "../components/PlayerListItem";
import { PageHeader } from "../components/Typography";
import { Game } from "../model";
import { loadGame } from "../services/gamesService";

export const GamePage = () => {
  const params = useParams<{ gameId: string }>();
  const [game, setGame] = useState<Game | null>(null);

  const onAddPlayer = () => {
    console.log("TBD: add player");
  };

  useEffect(() => {
    loadGame(params?.gameId!).then(setGame);
  }, [params.gameId]);

  if (!game) {
    return <Loading />;
  }

  return (
    <Stack direction="column" spacing={1}>
      <PageHeader>{game.name}</PageHeader>
      <List dense sx={{ width: "100%" }}>
        {game.scores.map((score) => (
          <PlayerListItem
            key={score.player.id}
            player={score.player}
            secondaryAction={<>{score.score}</>}
          />
        ))}
      </List>
      <AddPlayerButton onClick={onAddPlayer} />
    </Stack>
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

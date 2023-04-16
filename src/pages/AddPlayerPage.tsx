import { Button, List, Stack, TextField, Typography } from "@mui/material";
import {
  EventHandler,
  FormEvent,
  FormEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Loading } from "../components/Loading";
import { PlayerListItem } from "../components/PlayerListItem";
import { PageHeader, PageSectionHeader } from "../components/Typography";
import { useActiveGame } from "../hooks/ActiveGameContext";
import { Player } from "../model";
import { loadPreviousPlayers } from "../services/previousPlayersService";

export const AddPlayerPage = () => {
  const { game, players, setPlayers, addPlayer } = useActiveGame();
  const [previousPlayers, setPreviousPlayers] = useState<Player[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  useEffect(() => {
    loadPreviousPlayers().then(setPreviousPlayers);
  }, []);

  useEffect(() => {
    console.log("players", players);
  }, [players]);

  const onAddPlayer = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      console.log("Add player", newPlayerName);
      e.preventDefault();

      if (!game || !newPlayerName) return false;

      setPlayers([...players, { name: newPlayerName, id: newPlayerName }]);
    },
    [newPlayerName, setPlayers, players]
  );

  const filteredPreviousPlayers = useMemo(
    () => previousPlayers?.filter((x) => players.some((y) => y.id !== x.id)),
    [previousPlayers, game]
  );

  return (
    <Stack direction="column" spacing={1}>
      <PageHeader>Add a player</PageHeader>
      <form onSubmit={onAddPlayer}>
        <TextField
          fullWidth
          label="Enter player name"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
        />
        <Button type="submit" variant="outlined">
          Add New Player
        </Button>
      </form>

      <PageSectionHeader>Players</PageSectionHeader>
      <List>
        {players.map((player) => (
          <PlayerListItem key={player.id} player={player} />
        ))}
      </List>

      <PageSectionHeader>Previous Players</PageSectionHeader>
      {!filteredPreviousPlayers && <Loading />}
      {!filteredPreviousPlayers?.length && (
        <Typography variant="caption">No other saved players</Typography>
      )}
      {!!filteredPreviousPlayers?.length && (
        <List>
          {filteredPreviousPlayers.map((player) => (
            <PlayerListItem key={player.id} player={player} />
          ))}
        </List>
      )}
    </Stack>
  );
};

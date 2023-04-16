import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { Game, Player, PlayerScore } from "../model";

export interface ActiveGameState {
  game: Game | undefined;
  setGame: (game: Game) => void;
  players: Player[];
  addPlayer: (player: Player) => void;
  setPlayers: (players: Player[]) => void;
}

const ActiveGameContext = createContext<ActiveGameState>({
  game: undefined,
  setGame: () => null,
  players: [],
  addPlayer: () => null,
  setPlayers: () => null,
});

export const useActiveGame = () => useContext(ActiveGameContext);

export const ActiveGameProvider = ({
  children,
  game: initialGame,
}: PropsWithChildren<{ game?: Game }>) => {
  const [game, setGame] = useState<Game | undefined>(initialGame);
  const [players, setPlayers] = useState<Player[]>(
    initialGame?.scores?.map((score: PlayerScore) => score.player) || []
  );

  const addPlayer = useCallback(
    (player: Player) => {
      const newPlayers = [...players, player];
      console.log("newPlayers", newPlayers);
      setPlayers(newPlayers);
    },
    [players, setPlayers]
  );

  return (
    <ActiveGameContext.Provider
      value={{ game, setGame, setPlayers, players, addPlayer }}
    >
      {children}
    </ActiveGameContext.Provider>
  );
};

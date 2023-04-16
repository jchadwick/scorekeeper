import { Player } from "../model";
import { wait } from "../util/wait";

export const loadPreviousPlayers = async (): Promise<Player[]> => {
  return wait<Player[]>(() => [
    // 5 players with random scores between 0 and 100 (inclusive)
    ...Array(5)
      .fill(0)
      .map((_, i) => ({
        id: `player-${i}`,
        name: `Player ${i}`,
        avatarUrl: `https://robohash.org/${i}`,
      })),
  ]);
};

import { Game } from "../model";
import { wait } from "../util/wait";

export const loadGame = async (gameId: string): Promise<Game> => {
  return wait<Game>(() => ({
    id: gameId,
    name: `Game ${gameId}`,
    scores: [
      // 5 players with random scores between 0 and 100 (inclusive)
      ...Array(5)
        .fill(0)
        .map((_, i) => ({
          player: {
            id: `player-${i}`,
            name: `Player ${i}`,
            avatarUrl: `https://robohash.org/${i}`,
          },
          score: Math.floor(Math.random() * 101),
        })),
    ],
  }));
};

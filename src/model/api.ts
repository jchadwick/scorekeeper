export interface Player {
  id: string;
  name: string;
}

export interface Game {
  id: string;
  name: string;
}

export interface GamePlayer {
  gameId: string;
  playerId: string;
  score: number;
  level?: number;
}

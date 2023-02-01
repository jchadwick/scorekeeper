export interface Player {
  id: string;
  name: string;
  avatarUrl?: string;
  avatar?: string;
}

export interface PlayerScore {
  player: Player;
  score: number;
}

export interface Game {
  id: string;
  name: string;
  scores: PlayerScore[];
}

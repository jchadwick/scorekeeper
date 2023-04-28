import axios from "axios"

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

export const api = axios.create({ baseURL: `${process.env.API_URL}/api` })

export default api
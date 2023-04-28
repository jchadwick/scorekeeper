import api, { Game } from "@/lib/api";
import { useQuery } from "react-query";

export function useGames() {
    const query = useQuery < Game({
        queryKey: ["games"],
        queryFn: async () =>
            (await api.get<Game[]>(`/games`)).data
        ,
    });

    return { query }
}

export function useGame(gameId: string) {
    const query = useQuery({
        queryKey: ["games", gameId],
        queryFn: async () =>
            (await api.get(`/games/${gameId}`)).data
        ,
    });

    return query
}
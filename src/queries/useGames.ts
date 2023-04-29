import api, * as apiTypes from "@/lib/api";
import * as model from "@/model/client";
import { useMutation, useQuery } from "react-query";

export function useGames() {
    const query = useQuery<model.Game[]>({
        queryKey: ["games"],
        queryFn: async () =>
            (await api.get<apiTypes.Game[]>(`/games`)).data
        ,
    });

    return { query }
}

export function useGame(gameId: string) {
    const queryKey = ["games", gameId]
    const url = `/games/${gameId}`

    const get = useQuery<model.Game>({
        queryKey,
        queryFn: async () => (await api.get<apiTypes.Game>(url)).data
    });

    const update = useMutation<model.Game, unknown, apiTypes.Game>({
        mutationKey: queryKey,
        mutationFn: async (update) => (await api.put<apiTypes.Game>(url, update)).data
    });

    const del = useMutation({
        mutationKey: queryKey,
        mutationFn: () => api.delete(url)
    })

    return { get, del }
}
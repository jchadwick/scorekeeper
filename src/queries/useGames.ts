import api, * as apiTypes from "@/lib/api";
import * as model from "@/model/client";
import { useMutation, useQuery } from "react-query";

export const useGames = () => useGame("none").getAll;

export function useGame(gameId: string) {
  const endpoint = "games";
  const queryKey = [endpoint, gameId];
  const url = `/${endpoint}/${gameId}`;

  const getAll = useQuery<model.Game[]>({
    queryKey,
    queryFn: async () => (await api.get<apiTypes.Game[]>(`/${endpoint}`)).data,
  });

  const get = useQuery<model.Game>({
    queryKey,
    queryFn: async () => (await api.get<apiTypes.Game>(url)).data,
  });

  const update = useMutation<model.Game, unknown, apiTypes.Game>({
    mutationKey: queryKey,
    mutationFn: async (update) =>
      (await api.put<apiTypes.Game>(url, update)).data,
  });

  const del = useMutation(() => api.delete(url));



  const addPlayer = useMutation(async (playerId: string) => {
    const { data } = await api.post(`/games/${gameId}/players`, { playerId });
    return data;
  });

  return { get, getAll, del, update, addPlayer };
}


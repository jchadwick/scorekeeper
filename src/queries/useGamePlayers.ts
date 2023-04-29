import api, * as apiTypes from "@/lib/api";
import * as model from "@/model/client";
import { useMutation, useQuery } from "react-query";

export const useGamePlayers = (gameId: string) =>
  useGamePlayer(gameId, "none").getAll;

export function useGamePlayer(gameId: string, playerId: string) {
  const endpoint = "games";
  const queryKey = [endpoint, gameId, playerId];
  const url = `/${endpoint}/${gameId}/players/${playerId}`;

  const getAll = useQuery<model.GamePlayer[]>({
    queryKey,
    queryFn: async () =>
      (await api.get<apiTypes.GamePlayer[]>(`/${endpoint}`)).data,
  });

  const get = useQuery<model.GamePlayer>({
    queryKey,
    queryFn: async () => (await api.get<apiTypes.GamePlayer>(url)).data,
  });

  const update = useMutation<model.GamePlayer, unknown, apiTypes.GamePlayer>({
    mutationKey: queryKey,
    mutationFn: async (update) =>
      (await api.put<apiTypes.GamePlayer>(url, update)).data,
  });

  const del = useMutation(() => api.delete(url));

  return { get, getAll, del, update };
}

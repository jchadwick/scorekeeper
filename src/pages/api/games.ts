import { Game } from "@/model/api";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game[]>
) {
  const games = [
    { id: "1", name: "Game 1" },
    { id: "2", name: "Game 2" },
    { id: "3", name: "Game 3" },
    { id: "4", name: "Game 4" },
  ];

  res.status(200).json(games);
}

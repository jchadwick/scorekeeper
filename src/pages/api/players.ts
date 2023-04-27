import { Player } from "@/model/api";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Player[]>
) {
  const players = [
    { id: "1", name: "Player 1" },
    { id: "2", name: "Player 2" },
    { id: "3", name: "Player 3" },
    { id: "4", name: "Player 4" },
  ];

  res.status(200).json(players);
}

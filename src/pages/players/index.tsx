import { Player } from "@/model/client";
import { useEffect, useState } from "react";

const PlayersPage = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch("/api/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Players Page</h1>
      <ul>
        {players?.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default PlayersPage;

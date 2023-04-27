import { Game } from "@/model/client";
import { useEffect, useState } from "react";

const GamesPage = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("/api/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Games Page</h1>
      <ul>
        {games?.map((x) => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default GamesPage;

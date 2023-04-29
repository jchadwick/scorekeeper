import { Game } from "@/model/client";
import { useGames } from "@/queries/useGames";
import { useEffect, useState } from "react";

const GamesPage = () => {
  const gamesQuery = useGames();
  const games = gamesQuery.data;

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

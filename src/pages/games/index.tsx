import { useGames } from "@/queries/useGames";

const GamesPage = () => {
  const gamesQuery = useGames();
  const games = gamesQuery.data;

  return (
    <main>
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

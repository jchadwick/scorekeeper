import { Box, Card, CardContent, Stack } from "@mui/material";
import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { MainNav } from "./components/MainNav";
import { ActiveGameProvider } from "./hooks/ActiveGameContext";
import { Game } from "./model";
import { AddPlayerPage } from "./pages/AddPlayerPage";
import { GamePage } from "./pages/GamePage";
import { GamesPage } from "./pages/GamesPage";
import { UpdateScorePage } from "./pages/UpdateScorePage";

export const App = () => {
  const [game, setGame] = useState<Game | undefined>(undefined);

  return (
    <ActiveGameProvider game={game}>
      <Stack
        direction="column"
        sx={{ mx: "auto", width: "50vw", minHeight: "50em" }}
      >
        <MainNav />
        <Card sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <CardContent sx={{ flexGrow: 1, position: "relative" }}>
            <Suspense>
              <Routes>
                <Route path="/" element={<GamesPage />} />;
                <Route path="/games/:gameId" element={<GamePage />} />;
                <Route
                  path="/games/:gameId/players"
                  element={<AddPlayerPage />}
                />
                <Route
                  path="/games/:gameId/players/:playerId/score"
                  element={<UpdateScorePage />}
                />
                ;
              </Routes>
            </Suspense>
          </CardContent>
          <Box sx={{ height: "2.2em" }}>
            <Footer />
          </Box>
        </Card>
      </Stack>
    </ActiveGameProvider>
  );
};

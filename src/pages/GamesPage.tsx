import { Button, Stack, TextField } from "@mui/material";
import { PageHeader } from "../components/PageHeader";

export const GamesPage = () => (
  <>
    <Stack direction="column" spacing={1}>
      <PageHeader>Start a New Game</PageHeader>
      <TextField fullWidth label="Enter new game name" />
      <Button variant="outlined">Start New Game</Button>
    </Stack>
  </>
);

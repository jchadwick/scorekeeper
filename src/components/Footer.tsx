import { ButtonGroup, Button } from "@mui/material";
import { Stack } from "@mui/system";

export const Footer = () => (
  <Stack direction="row" flexGrow={1}>
    <ButtonGroup fullWidth variant="contained" aria-label="primary actions">
      <Button>Games</Button>
      <Button>Players</Button>
      <Button>Timer</Button>
    </ButtonGroup>
  </Stack>
);

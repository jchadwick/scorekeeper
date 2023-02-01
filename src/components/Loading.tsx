import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loading = () => (
  <Box
    sx={{
      display: "flex",
      flexGrow: 1,
      justifyContent: "center",
    }}
  >
    <CircularProgress />
  </Box>
);

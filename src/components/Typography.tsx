import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export const PageHeader = ({ children }: PropsWithChildren<{}>) => (
  <Typography variant="h3">{children}</Typography>
);

export const PageSectionHeader = ({ children }: PropsWithChildren<{}>) => (
  <Typography variant="h4">{children}</Typography>
);

import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  app: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: theme.spacing.lg,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: 42,
    fontWeight: "normal",
    letterSpacing: "0.08em",
  },
  nav: {
    display: "flex",
    gap: theme.spacing.lg,
  },
  content: {
    flexGrow: 1,
  },
}));

import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  // TODO: Center on page
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing.lg,
  },

  card: {
    width: 320,
  },

  title: {
    marginTop: theme.spacing.md,
    color: theme.colors[theme.primaryColor],
    fontWeight: 600,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));

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

    opacity: 0,
    transform: "scale(0.9)",
    transition: `all 300ms`,

    "&.mounted": {
      opacity: 1,
      transform: "scale(1)",
    },
  },

  title: {
    marginTop: theme.spacing.md,
    color: theme.colors[theme.primaryColor],
    fontWeight: 600,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  loading: {
    height: "100%",
    display: "grid",
    placeItems: "center",
  },
}));

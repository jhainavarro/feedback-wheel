import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  grid: {
    justifyItems: "center",
  },
  video: {
    width: "min(700px, 100%)",
    marginTop: theme.spacing.xl * 4,
    position: "sticky",
    top: theme.spacing.xl,
  },
}));

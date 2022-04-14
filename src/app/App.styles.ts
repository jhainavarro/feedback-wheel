import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  app: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    position: "fixed",
    top: 0,
    zIndex: 10,
    width: "100%",
    backgroundColor: theme.colors.pink[0],
    paddingBlock: theme.spacing.xs,
    paddingInline: theme.spacing.xl * 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontSize: 42,
    fontWeight: "normal",
    letterSpacing: "0.08em",
    lineHeight: "56px",
  },

  nav: {
    display: "flex",
    gap: theme.spacing.lg,
  },

  content: {
    flexGrow: 1,
    paddingTop: 80 + theme.spacing.xl, // Depends on header height
    paddingInline: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl,
  },
}));

import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  grid: {
    justifyItems: "center",
  },

  left: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  video: {
    width: "min(700px, 100%)",
    marginTop: theme.spacing.xl * 4,
    position: "sticky",
    top: 200, // Depends on current offset on load (header height, padding, etc)
  },

  right: {
    position: "relative",
  },

  formContainer: {
    zIndex: 2,
    overflow: "hidden",

    opacity: 1,
    maxHeight: 0,
    transition: "max-height 300ms 150ms, opacity 300ms",

    "&.active": {
      opacity: 1,
      maxHeight: "100%",
    },
  },

  form: {},

  success: {
    position: "absolute",
    top: 0,
    marginTop: 160,

    opacity: 0,
    transition: "opacity 500ms 800ms",

    "&.active": {
      opacity: 1,
    },
  },

  videosLink: {
    marginTop: theme.spacing.md,
  },
}));

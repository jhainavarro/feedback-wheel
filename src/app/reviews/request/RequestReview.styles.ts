import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  grid: {
    justifyItems: "center",
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
    overflow: "hidden",

    opacity: 0,
    maxHeight: 0,
    transition: "max-height 500ms 300ms, opacity 800ms",

    "&.active": {
      opacity: 1,
      maxHeight: "100%",
    },
  },

  form: {},

  success: {
    position: "absolute",
    top: 0,
    zIndex: -1,
    marginTop: 160,

    opacity: 0,
    transform: "scale(0.8)",
    transition: "transform 500ms 800ms, opacity 100ms 1500ms",

    "&.active": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
}));

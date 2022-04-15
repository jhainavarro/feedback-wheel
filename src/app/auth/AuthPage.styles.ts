import { createStyles } from "@mantine/core";

/*
 * Shoutout to Florin Pop for being the mastermind behind this amazing animation!
 * https://codepen.io/FlorinPop17/pen/vPKWjd
 */

export const useStyles = createStyles((theme) => ({
  grid: {
    height: "100%",
    display: "grid",
    placeItems: "center",
  },

  container: {
    boxShadow: `
      0 4px 16px rgb(0 0 0 / 15%),
      0 4px 28px rgb(0 0 0 / 10%)
    `,
    borderRadius: 10,
    position: "relative",
    width: 960,
    maxWidth: "100%",
    minHeight: 480,
    overflow: "hidden",
  },

  forms: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    background: theme.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > div": {
      height: "100%",
      width: "100%",
      flex: "1 1 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  window: {
    position: "absolute",
    top: 0,
    left: "50%",
    width: "50%",
    height: "100%",
    overflow: "hidden",
    zIndex: 100,

    transform: "translateX(0)",
    transition: "transform 500ms ease-in-out",

    "&.signup-active": {
      transform: "translateX(0)",
    },

    "&.login-active": {
      transform: "translateX(-100%)",
    },

    "&.login-active .login-prompt": {
      transform: "translateX(0)",
    },

    "&.login-active .signup-prompt": {
      transform: "translateX(20%)",
    },

    "&.signup-active .login-prompt": {
      transform: "translateX(-120%)",
    },

    "&.signup-active .signup-prompt": {
      transform: "translateX(-100%)",
    },
  },

  prompts: {
    position: "relative",
    // left: "-100%",
    left: 0,
    height: "100%",
    width: "200%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: theme.white,
    background: theme.fn.linearGradient(
      90,
      theme.colors.pink[6],
      theme.colors.violet[6]
    ),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "0 0",

    transform: "translateX(0)",
    transition: "transform 500ms ease-in-out",
  },

  prompt: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "50%",
    paddingBlock: 32,
    paddingInline: 60,
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",

    h1: {
      marginBottom: theme.spacing.lg,
    },

    footer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",

      button: {
        color: theme.white,
        border: "none",
      },
    },

    transform: "translateX(0)",
    transition: "transform 500ms ease-in-out",

    "&.login-prompt": {
      left: 0,
    },

    "&.signup-prompt": {
      left: "50%",
    },
  },
}));

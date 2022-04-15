import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  form: {
    height: "100%",
    width: "100%",
    paddingInline: theme.spacing.xl * 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    textAlign: "center",
  },

  title: {
    marginBottom: theme.spacing.lg,
  },

  socials: {
    display: "flex",
    justifyContent: "center",
    columnGap: theme.spacing.sm,
    marginBottom: theme.spacing.md,

    "> button": {
      border: "none",
      borderRadius: "50%",
      boxShadow: "0px 4px 8px -2px rgb(0 0 0 / 50%)",
    },
  },

  input: {
    ":not(:first-of-type)": {
      marginTop: theme.spacing.sm,
    },
  },

  forgotPw: {
    fontSize: theme.fontSizes.xs,
    textAlign: "left",
    marginTop: theme.spacing.sm,
    color: theme.colors.pink[5],
  },

  submit: {
    marginTop: theme.spacing.xl,
  },
}));

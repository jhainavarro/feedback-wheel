import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  alert: {
    maxWidth: "60ch",
    marginBlock: theme.spacing.xl,
    "& span": {
      fontWeight: 600,
    },
  },

  alertIcon: {
    width: "100%",
    height: "100%",
    fill: theme.colors.orange[5],
  },

  form: {
    maxWidth: "60ch",
  },

  urlInput: {
    marginBlock: theme.spacing.lg,
  },

  thumbLabel: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray,
  },

  thumb: {
    width: 320,
    height: 180,
    marginBlock: theme.spacing.sm,
    marginInline: "auto",
  },

  footer: {
    marginTop: 40,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

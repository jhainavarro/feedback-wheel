import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  form: {
    maxWidth: "70ch",
    marginInline: "auto",
  },

  field: {
    ":not(:first-of-type)": {
      marginTop: 40,
    },
  },

  rating: {
    marginTop: theme.spacing.sm,
  },

  error: {
    color: theme.colors.red[7],
    fontSize: theme.fontSizes.xs,
    marginTop: 4,

    "&:after": {
      content: "' '",
      whiteSpace: "pre",
    },
  },

  asterisk: {
    color: theme.colors.red[5],
    marginLeft: 8,
    fontSize: theme.fontSizes.xl,
  },

  textarea: {
    marginTop: 4,
  },

  footer: {
    marginTop: 44,
    marginBottom: 64,
  },
}));

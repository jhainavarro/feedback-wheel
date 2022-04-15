import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  loading: {
    height: "100%",
    display: "grid",
    placeItems: "center",
  },

  video: {
    width: "min(960px, 100%)",
    height: 500,
    marginTop: theme.spacing.xl,
  },

  title: {
    fontSize: 28,
    fontWeight: 600,
  },

  reviewsSection: {
    marginTop: 40,
  },

  reviewsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statsContainer: {
    display: "grid",
    alignItems: "center",
    marginTop: 32,
    // gridTemplateColumns: "max-content 1fr 0.5fr max-content 1fr",
    gridTemplateColumns: "0.7fr 1fr 0.5fr 0.6fr 1fr",
    gridTemplateRows: "repeat(2, 1fr)",
    rowGap: theme.spacing.xs,
  },

  quotes: {
    marginBlock: 40,
  },

  noReviews: {
    marginTop: 24,
  },

  needMoreReviews: {
    marginTop: 32,
  },

  eyesIcon: {
    width: "100%",
    height: "100%",
  },
}));

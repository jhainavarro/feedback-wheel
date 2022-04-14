import { SimpleGrid } from "@mantine/core";
import { useStyles } from "./RequestReview.styles";
import { RequestReviewForm } from "./RequestReviewsForm";

export function RequestReviews() {
  const { classes } = useStyles();

  return (
    <SimpleGrid
      cols={2}
      breakpoints={[{ maxWidth: 768, cols: 1, spacing: "sm" }]}
      className={classes.grid}
    >
      <iframe
        width="280"
        height="400"
        // TODO: Replace with Youtube video to review
        src="https://www.youtube-nocookie.com/embed/f3mwKLXpOLk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={classes.video}
      ></iframe>

      <RequestReviewForm />
    </SimpleGrid>
  );
}

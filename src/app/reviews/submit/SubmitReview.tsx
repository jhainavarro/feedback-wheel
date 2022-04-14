import { Anchor, SimpleGrid, Text, Title } from "@mantine/core";
import { useState } from "react";
import Lottie from "lottie-react";
import checkmarkAnimation from "shared/assets/success-lottie.json";
import { useStyles } from "./SubmitReview.styles";
import { RequestReviewForm } from "./SubmitReviewForm";
import { Link } from "react-router-dom";

export function RequestReviews() {
  const { classes, cx } = useStyles();
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <SimpleGrid
      cols={2}
      breakpoints={[{ maxWidth: 768, cols: 1, spacing: "sm" }]}
      className={classes.grid}
      spacing={40}
    >
      <div className={classes.left}>
        <iframe
          width="280"
          height="400"
          // TODO: Get actual video to review
          src="https://www.youtube-nocookie.com/embed/4prVdA7_6u0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={classes.video}
        ></iframe>
      </div>

      <div className={classes.right}>
        <div className={cx(classes.formContainer, { active: !showSuccess })}>
          <RequestReviewForm
            className={classes.form}
            onSave={() => setShowSuccess(true)}
          />
        </div>

        <div className={cx(classes.success, { active: showSuccess })}>
          {/* FIXME: Plays twice */}
          {showSuccess && (
            <Lottie
              style={{ width: "150px" }}
              animationData={checkmarkAnimation}
              loop={false}
              autoPlay
            />
          )}
          <Title order={2}>Thank you!</Title>
          <Text>You've just made this community a better place</Text>
          <Anchor className={classes.videosLink} component={Link} to="/">
            Check out other videos you can review
          </Anchor>
        </div>
      </div>
    </SimpleGrid>
  );
}

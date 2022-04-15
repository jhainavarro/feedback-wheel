import { Anchor, Loader, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import Lottie from "lottie-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getEmbedUrl, useGetVideo } from "app/videos";
import { ReactComponent as EmptyImg } from "shared/assets/empty-1.svg";
import checkmarkAnimation from "shared/assets/success-lottie.json";
import { useStyles } from "./SubmitReview.styles";
import { SubmitReviewForm } from "./SubmitReviewForm";

export function SubmitReview() {
  const params = useParams();
  const { data: video, isLoading } = useGetVideo(Number(params.id));
  const { classes, cx } = useStyles();
  const [showSuccess, setShowSuccess] = useState(false);

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <Loader variant="dots" />
      </div>
    );
  }

  // TODO: Error state
  if (!params.id || !video) {
    return (
      <div className={classes.empty}>
        <Stack align="center">
          <EmptyImg className={classes.emptyImg} />
          <Text className={classes.notFound} size="xl">
            Oops! You might be lost ...
          </Text>
          <Anchor component={Link} to="/">
            Back to home page
          </Anchor>
        </Stack>
      </div>
    );
  }

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
          src={getEmbedUrl(video.url)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={classes.video}
        ></iframe>
      </div>

      <div className={classes.right}>
        <div className={cx(classes.formContainer, { active: !showSuccess })}>
          <SubmitReviewForm
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
